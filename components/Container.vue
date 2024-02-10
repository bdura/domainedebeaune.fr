<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const variants = cva(["mx-auto"], {
  variants: {
    size: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
    },
    padding: {
      sm: "px-2 sm:px-3 lg:px-4",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-10",
      xl: "px-8 sm:px-12 lg:px-18",
    },
  },
  defaultVariants: {
    size: "4xl",
    padding: "md",
  },
});

type ContainerVariants = VariantProps<typeof variants>;

interface Props {
  size?: ContainerVariants["size"];
  padding?: ContainerVariants["padding"];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(variants({ size, padding }), props.class)">
    <slot></slot>
  </div>
</template>
