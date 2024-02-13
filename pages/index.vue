<script setup lang="ts"></script>

<template>
  <div
    class="bg-cover bg-center"
    style="background-image: url('/assets/images/golden-h.jpg')"
  >
    <div
      class="w-full px-3 py-12 sm:py-20 md:py-36 flex justify-center content-center"
    >
      <div>
        <h1 class="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
          Domaine de Beaune
        </h1>
        <h2 class="text-gray-200 text-xl font-semibold">
          Route de Saint-Sandoux - 63730 Plauzat
        </h2>
      </div>
    </div>
  </div>

  <div class="mt-4 md:mt-12 flex flex-col space-y-4">
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
