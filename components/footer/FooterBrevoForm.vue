<script setup lang="ts">
import { toast } from "@/components/ui/toast";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(1, "Champ requis").email("Email invalide."),
  })
);

const { brevoFormUrl } = useRuntimeConfig().public;

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

async function addEmail(email: string): Promise<void> {
  let body = new FormData();
  body.append("EMAIL", email);

  try {
    await $fetch(brevoFormUrl, {
      method: "POST",
      body,
      mode: "no-cors",
    });
    toast({
      title: "Inscription réussie",
      description:
        "Votre adresse a bien été ajoutée ! Nous vous tiendrons au courant de la prochaine cueillette.",
    });
  } catch {
    toast({
      title: "Aïe...",
      variant: "destructive",
      description:
        "Nous n'avons pas pu ajouter votre adresse à l'infolettre. Veuillez réessayer.",
    });
  }
}

const onSubmit = handleSubmit(({ email }) => {
  addEmail(email);
});
</script>

<template>
  <form
    :validation-schema="formSchema"
    @submit="onSubmit"
    class="max-w-md flex space-x-1.5"
  >
    <FormField v-slot="{ componentField }" name="email">
      <FormItem class="grow">
        <FormControl>
          <Input type="email" v-bind="componentField" />
        </FormControl>
        <FormMessage class="text-black" />
      </FormItem>
    </FormField>
    <Button type="submit" variant="default"> S'inscrire </Button>
  </form>
</template>
