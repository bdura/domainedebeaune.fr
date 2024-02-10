<script setup lang="ts">
import { cn } from "@/lib/utils";
import { HomeIcon, UploadIcon } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

interface NavItem {
  name: string;
  to: string;
  icon: FunctionalComponent;
}

const navigation: NavItem[] = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Upload", to: "/upload", icon: UploadIcon },
];
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <NuxtLink to="/">
      <Logo class="max-h-full" />
    </NuxtLink>
    <NuxtLink
      v-for="item in navigation"
      :to="item.to"
      :class="
        cn(
          'text-sm font-medium transition-colors hover:text-primary',
          item.to == $route.path ? '' : 'text-muted-foreground'
        )
      "
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>
