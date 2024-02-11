<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import type { Post } from "~/lib/types";

const query: QueryBuilderParams = {
  path: "/articles",
  limit: 4,
  sort: [{ date: -1 }],
};
</script>

<template>
  <ContentList :query="query" v-slot="{ list }">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5">
      <ArticleCard
        v-for="post in list"
        :key="post._path"
        :post="(post as unknown as Post)"
      />
    </div>
  </ContentList>
</template>
