<script setup lang="ts">
import { Maximize2Icon } from "lucide-vue-next";

interface Props {
  src: string;
}

const props = defineProps<Props>();
const { src } = toRefs(props);
</script>

<template>
  <div class="relative">
    <AspectRatio :ratio="4 / 3" class="overflow-hidden rounded-md">
      <img :src="src" alt="Image" class="object-cover object-center" />
    </AspectRatio>
    <Dialog>
      <DialogTrigger>
        <Button
          variant="outline"
          class="absolute right-2 top-2 h-5 w-5 p-0.5 opacity-50 hover:opacity-100 bg-gray-200 rounded"
        >
          <Maximize2Icon></Maximize2Icon>
        </Button>
      </DialogTrigger>
      <DialogContent class="max-w-screen-lg p-3">
        <AspectRatio :ratio="4 / 3" class="overflow-hidden rounded-md">
          <img :src="src" alt="Image" class="object-cover" />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  </div>
</template>
