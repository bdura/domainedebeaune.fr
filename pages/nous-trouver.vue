<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
</script>

<template>
  <Container size="4xl">
    <div class="flex justify-between mb-1 md:mb-3">
      <Heading1>Nous trouver</Heading1>
      <NuxtLink to="/">
        <Button variant="outline" size="sm">
          <ChevronLeft class="-ml-2"></ChevronLeft>
          Retour
        </Button>
      </NuxtLink>
    </div>
    <GoogleMaps></GoogleMaps>
  </Container>
</template>
