<template>
  <h1
    class="is-size-2 has-text-weight-bold has-text-black mb-6 has-text-centered"
  >
    Promocje
  </h1>
  <div class="container is-flex mb-6 gap">
    <div class="promotion column">
      <div class="is-flex is-flex-direction-column promotion-text">
        <span class="has-text-white">KOLEKCJA | 2024</span>
        <span class="has-text-black mb-2 mt-4"
          >Najnowsze modele kolekcji 2024</span
        >
        <NuxtLink to="/products" class="button is-black"
          >Zobacz &nbsp;&nbsp;⮕</NuxtLink
        >
      </div>
    </div>
    <div class="promotion column">
      <div class="is-flex is-flex-direction-column promotion-text">
        <span class="has-text-white">KOLEKCJA | 2023</span>
        <span class="has-text-black mb-2 mt-4"
          >Produkty z sezonu 2023 i wcześniejsze</span
        >
        <NuxtLink to="/products" class="button is-black"
          >Zobacz &nbsp;&nbsp;⮕</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.promotion {
  position: relative;
  background-image: url("https://clickfashion.pl/media/idea07_contenttypes/contenttypeentity/image/1/_/1_1.png");
  background-size: cover;
  height: 28rem;
}
.promotion:nth-of-type(2) {
  background-image: url("https://clickfashion.pl/media/idea07_contenttypes/contenttypeentity/image/w/y/wyprzeda_.png");
}
.gap {
  gap: 4rem;
}
.promotion-text {
  position: absolute;
  margin-right: 50%;
  left: 2rem;
  bottom: 4rem;
}
@media (max-width: 800px) {
  .container {
    flex-direction: column;
    height: fit-content;
  }
  .column {
    flex-basis: auto !important;
  }
}
</style>
