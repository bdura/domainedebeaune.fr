<template>
  <!-- <Nav></Nav> -->
  <div class="min-h-dvh flex flex-col">
    <main class="grow pb-4 md:pb-10">
      <div
        class="bg-cover bg-center mb-4 md:mb-8"
        style="background-image: url('/assets/images/champs-ete.jpg')"
      >
        <div class="w-full px-3 py-10 sm:py-20 flex justify-center">
          <h1 class="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
            Domaine de Beaune
          </h1>
        </div>
      </div>
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts"></script>
