<template>
  <div class="container">
    <div class="container is-flex is-justify-content-flex-end big my-6">
      <div class="has-text-white info">
        <p class="banner__category">Kolekcja 2024 / MODOWE INSPIRACJE</p>
        <p class="banner__title mb-5">CLICK FASHION</p>
        <p>Ręcznie robione ubrania, naturalne materiały, polska marka</p>
        <button class="button is-black mt-3">
          Więcej nowosci &nbsp;&nbsp;⮕
        </button>
      </div>
      <div
        class="socials column has-background-white is-flex is-justify-content-space-between is-align-items-center is-flex-direction-column"
      >
        <span class="socials-text">SOCIAL MEDIA</span>
        <div
          class="column has-background-white is-flex is-justify-content-flex-end is-align-items-center is-flex-direction-column"
        >
          <font-awesome icon="camera-retro" class="mb-6" />
          <font-awesome icon="laptop" />
        </div>
      </div>
    </div>
    <div class="spacer" />
  </div>
</template>

<style scoped>
.banner__title {
  font-size: 4rem;
  font-weight: 600;
}
.banner__category {
  font-weight: 800;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
}
.info {
  position: absolute;
  top: 40%;
  left: 3%;
}
.spacer {
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4rem;
  width: 20rem;
}
.big {
  height: 40rem;
  background-image: url("https://clickfashion.pl/media/idea07_contenttypes/contenttypeentity/image/b/a/baner_08-04.png");
  background-size: cover;
  filter: brightness(0.95);
}
.socials {
  position: absolute;
  height: 50%;
  width: 4.375rem;
  padding-top: 30px;
  padding-bottom: 30px;
}
.socials-text {
  text-wrap: nowrap;
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: 0.25rem;
  transform: rotate(90deg);
  transform-origin: bottom left;
  width: 70%;
  transform-origin: 50% 50%;
}
</style>
