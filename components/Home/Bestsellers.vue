<script setup>
const clothes = [
  { name: "Marynarka zielona", price: "266,99", imagePath: "clothes1.jpg" },
  { name: "Płaszcz Borra", price: "221,50", imagePath: "clothes6.jpg" },
  { name: "Spódnica czarna", price: "300,00", imagePath: "clothes5.jpg" },
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
      v-for="cloth in clothes.slice(0, 3)"
      class="shadow"
    />
  </div>
</template>

<style scoped>
.wrapper {
  height: 70rem;
}
.shadow {
  position: absolute;
  margin: 1rem;
  -webkit-box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  border-radius: 1rem;
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
</style>
