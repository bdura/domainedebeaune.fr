<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";
</script>

<template>
  <footer class="w-full bg-secondary text-secondary-foreground py-10 md:py-20">
    <Container
      size="4xl"
      padding="xl"
      class="grid grid-cols-3 gap-8 items-center"
    >
      <div class="col-span-3 md:col-span-2">
        <Heading2>Restez informé !</Heading2>
        <p>
          Inscrivez-vous à l'info-lettre pour être informé de l'ouverture de la
          prochaine cueillette :
        </p>
        <FooterBrevoForm class="mt-4"></FooterBrevoForm>
      </div>
      <div class="col-span-3 md:col-span-1">
        <NuxtLink to="mailto:contact@domainedebeaune.com">
          <Button class="w-full" variant="secondary" size="lg"
            ><MailIcon class="h-5 mr-3" />Contactez-nous</Button
          >
        </NuxtLink>
      </div>
    </Container>
  </footer>
</template>
