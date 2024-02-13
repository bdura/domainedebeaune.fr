<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";

const route = useRoute();

const path = route.params.slug;
const { data: article } = await useAsyncData<Record<string, any>>(
  "page-data",
  () => queryContent(`/articles/${path}`).findOne()
);
</script>

<template>
  <div
    class="bg-cover bg-center"
    style="background-image: url('/assets/images/champs-ete.jpg')"
  >
    <div class="w-full px-3 py-10 sm:py-20 flex justify-center">
      <h1 class="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
        Domaine de Beaune
      </h1>
    </div>
  </div>
  <div class="mt-4 md:mt-8">
    <ContentRenderer v-if="article" :value="article">
      <Container size="3xl">
        <ImageDialog :src="article.image" />
        <div class="flex justify-between">
          <Heading1>{{ article.title }}</Heading1>
          <NuxtLink to="/">
            <Button variant="outline" size="sm">
              <ChevronLeft class="-ml-2"></ChevronLeft>
              Retour
            </Button>
          </NuxtLink>
        </div>
        <ContentRendererMarkdown :value="article" />
      </Container>
    </ContentRenderer>
  </div>
</template>
