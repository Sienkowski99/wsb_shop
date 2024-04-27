<template>
  <section class="section newsletter-section px-6 has-text-black">
    <div class="container is-flex">
      <div
        class="is-flex is-flex-direction-column is-flex-justify-content-center column has-text-centered mx-6"
      >
        <font-awesome icon="percent" class="mb-5 is-size-2" />
        <p class="informations__title">Skorzystaj z promocji</p>
        <p class="informations__text">
          Odwiedzając naszą stronę zawsze możesz liczyć na ciekawe promocje
        </p>
      </div>
      <div
        class="is-flex is-flex-direction-column is-flex-justify-content-center column has-text-centered mx-6"
      >
        <font-awesome icon="truck-fast" class="mb-5 is-size-2" />
        <p class="informations__title">wysyłka</p>
        <p class="informations__text">
          Gwarantujemy wysyłkę w ciągu 24h od zaksięgowania płatności
        </p>
      </div>
      <div
        class="is-flex is-flex-direction-column is-flex-justify-content-center column has-text-centered mx-6"
      >
        <font-awesome icon="lock" class="mb-5 is-size-2" />
        <p class="informations__title">Bezpieczne zakupy</p>
        <p class="informations__text">
          Kupując w naszym sklepie masz gwarancję bezpiecznych zakupów i
          płatności
        </p>
      </div>
    </div>
  </section>
  <h1
    class="is-size-2 has-text-weight-bold has-text-black my-6 has-text-centered"
  >
    Promocje
  </h1>
  <div class="container is-flex mb-6 gap">
    <div class="promotion column">
      <div class="is-flex is-flex-direction-column promotion-text">
        <span class="has-text-white">KOLEKCJA | 2023</span>
        <span class="has-text-black mb-2 mt-4"
          >Produkty z sezonu 2023 i wcześniejsze</span
        >
        <button class="button is-black">Zobacz &nbsp;&nbsp;⮕</button>
      </div>
    </div>
    <div class="promotion column">
      <div class="is-flex is-flex-direction-column promotion-text">
        <span class="has-text-white">KOLEKCJA | 2024</span>
        <span class="has-text-black mb-2 mt-4"
          >Najnowsze modele kolekcji 2024</span
        >
        <button class="button is-black">Zobacz &nbsp;&nbsp;⮕</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.informations__text {
  margin: 0 1rem;
}
.informations__title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.promotion {
  position: relative;
  background-color: red;
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
</style>
