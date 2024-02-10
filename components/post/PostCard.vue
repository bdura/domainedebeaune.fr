<script setup lang="ts">
import type { Post } from "~/lib/types";

interface Props {
  post: Post;
}

const props = defineProps<Props>();
const { post } = toRefs(props);
</script>

<template>
  <Card class="overflow-hidden group hover:shadow-lg transition-shadow">
    <div v-if="post.img" class="overflow-hidden">
      <img
        :src="post.img"
        class="w-full h-48 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
      />
    </div>
    <CardHeader>
      <CardTitle>{{ post.title }}</CardTitle>
      <CardDescription>
        <time :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ContentRendererMarkdown :value="post"></ContentRendererMarkdown>
    </CardContent>
  </Card>
</template>
