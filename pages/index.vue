<template>
  <!-- <div class="container is-flex-direction-row is-justify-content-center"> -->
  <div
    class="container columns is-flex-direction-row is-justify-content-flex-end big"
  >
    <div class="spacer" />

    <div class="info column">
      <p class="banner__category">Kolekcja 2024 / MODOWE INSPIRACJE</p>
      <p class="banner__title">CLICK FASHION</p>
      <div class="banner__content">
        <div
          data-content-type="html"
          data-appearance="default"
          data-element="main"
          data-decoded="true"
        >
          <p>Ręcznie robione ubrania, naturalne materiały, polska marka</p>
        </div>
      </div>
      <button class="button is-black">Więcej</button>
    </div>
    <img
      class="photo"
      src="https://img.freepik.com/free-photo/monochrome-beauty-concept-good-looking-caucasian-female-with-straight-hair-clean-skin_273609-28576.jpg"
    />
    <div class="socials column">
      <!-- <span class="socials-text">Social Medisa</span> -->
      <!-- <i class="fas fa-home"></i>
      <i class="fa-brands fa-instagram"></i> -->
      <span>insta</span>
      <span>Face</span>
      <!-- <span class="icon">
      </span>
      <span class="icon">
        <i class="fas fa-home"></i>
      </span> -->
    </div>

    <!-- <div class="notification is-primary">
      This container is <strong>centered</strong> on desktop and larger
      viewports.
    </div> -->
  </div>
  <!-- </div> -->
</template>

<style scoped>
.banner__title {
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 1.6rem;
  font-weight: 600;
  letter-spacing: normal;
}
.info {
  color: white;
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
  position: relative;
  background-color: #ae3735;
  height: 40rem;
}
.photo {
  background-color: blueviolet;
  width: 60%;
  height: 100%;
  object-fit: cover;
}
.socials {
  position: absolute;
  background-color: white;
  height: 50%;
  width: 4.375rem;
  align-items: flex-end;
  /* justify-content: flex-end; */
}
.socials-text {
  text-wrap: nowrap;
  text-transform: uppercase;
  font-family: monospace;
  font-weight: 400;
  letter-spacing: 0.125rem;
  position: absolute;
  transform-origin: 0, 0;
  /* top: 0;
  right: 0; */
  transform: rotate(90deg);
}
</style>
