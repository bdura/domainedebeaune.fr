<script setup lang="ts">
import type { Post } from "~/lib/types";

interface Props {
  post: Post;
}

const props = defineProps<Props>();
const { post } = toRefs(props);

const { _path } = post.value;
const path = _path.split("/").slice(-1)[0];
</script>

<template>
  <Card
    class="overflow-hidden group hover:shadow-lg transition-shadow duration-200"
  >
    <div v-if="post.image" class="overflow-hidden">
      <img
        :src="formatPublic(post.image)"
        class="w-full h-48 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
      />
    </div>
    <CardHeader>
      <CardTitle>{{ post.title }}</CardTitle>
      <CardDescription>
        Publié le
        <time :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ContentRendererMarkdown :value="post.excerpt"></ContentRendererMarkdown>
    </CardContent>
    <CardFooter class="flex justify-end">
      <NuxtLink :to="`/articles/${path}`">
        <Button size="sm" variant="secondary"> En savoir plus </Button>
      </NuxtLink>
    </CardFooter>
  </Card>
</template>
