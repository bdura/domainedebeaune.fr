<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink
    :href="href"
    target="_blank"
    class="text-secondary hover:text-secondary/80 cursor-pointer"
  >
    <slot></slot>
  </NuxtLink>
</template>
