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
</template>
