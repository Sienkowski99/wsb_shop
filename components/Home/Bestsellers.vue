<script setup>
const clothes = [
  { id: 1, name: "Marynarka zielona", price: "266.99", imagePath: "clothes1.jpg" },
  { id: 6, name: "Płaszcz Borra", price: "221.50", imagePath: "clothes6.jpg" },
  { id: 5, name: "Spódnica czarna", price: "300.00", imagePath: "clothes5.jpg" },
];
</script>

<template>
  <h1
    class="is-size-2 has-text-weight-bold has-text-black mt-6 has-text-centered"
  >
    Top Bestsellery
  </h1>
  <p class="has-text-centered mt-4">
    najczęściej wybierane produkty przez naszych klientów
  </p>
  <div class="container my-6 p-6 wrapper">
    <TileTemplate
      v-bind:cloth="cloth"
      v-for="cloth in clothes"
      class="shadow"
    />
  </div>
</template>

<style scoped>
.shadow {
  position: absolute;
  margin: 1rem;
  -webkit-box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  border-radius: 1rem;
}
@media (max-width: 800px) {
  .shadow {
    position: relative;
    margin: 1rem auto;
    transform: none;
  }
  .shadow:nth-of-type(1),
  .shadow:nth-of-type(2),
  .shadow:nth-of-type(3) {
    left: auto;
    right: auto;
  }
}
@media (min-width: 800px) {
  .wrapper {
    height: 70rem;
  }
  .shadow:nth-of-type(3) {
    right: 2%;
    transform: translate(0, 40%);
  }
  .shadow:nth-of-type(2) {
    left: 50%;
    transform: translate(-45%, 0);
  }
  .shadow:nth-of-type(1) {
    left: 5;
    transform: translate(0, 20%);
  }
}
</style>
