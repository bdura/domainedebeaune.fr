<script setup lang="ts">
import type { Post } from "~/lib/types";
</script>

<template>
  <ContentList path="/posts" v-slot="{ list }">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5">
      <PostCard
        v-for="post in list"
        :key="post._path"
        :post="(post as unknown as Post)"
      />
    </div>
  </ContentList>
</template>
