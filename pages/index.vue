<script setup lang="ts"></script>

<template>
  <div
    class="bg-cover bg-center"
    style="
      background-image: url('/assets/images/placeholder-laurent-gence-xMeHlkG8hdQ-unsplash.jpg');
    "
  >
    <div class="w-full py-12 sm:py-20 md:py-36 flex justify-center">
      <h1 class="text-white text-2xl sm:text-4xl md:text-6xl font-bold">
        Domaine de Beaune
      </h1>
    </div>
  </div>

  <div class="mt-12 flex flex-col space-y-4">
    <section>
      <Container size="3xl">
        <Heading1> Présentation </Heading1>
        <Presentation />
      </Container>
    </section>
    <section>
      <Container size="3xl">
        <Heading1> Les dernières nouvelles </Heading1>
      </Container>
      <Container size="5xl" class="mt-5">
        <ArticleList></ArticleList>
      </Container>
    </section>
  </div>
</template>
