<script setup>
function createRandomList(n, from_) {
  const randomList = [];
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * from_.length);
    randomList.push(from_[randomIndex]);
  }
  return randomList;
}

const baseClothes = [
  { id: 1, name: "Marynarka zielona", price: "266.99", imagePath: "clothes1.jpg" },
  { id: 2, name: "Biała koszulka", price: "300.00", imagePath: "clothes2.jpg" },
  { id: 3, name: "Spódnica Magenta", price: "221.50", imagePath: "clothes3.jpg" },
  { id: 4, name: "Spódnica zółta", price: "150.99", imagePath: "clothes4.jpg" },
  { id: 5, name: "Spódnica czarna", price: "300.00", imagePath: "clothes5.jpg" },
  { id: 6, name: "Płaszcz Borra", price: "221.50", imagePath: "clothes6.jpg" },
  { id: 7, name: "Bluzka biała", price: "130.00", imagePath: "clothes7.jpg" },
  { id: 8, name: "Bluzka czarna", price: "130.00", imagePath: "clothes8.jpg" },
  { id: 9, name: "Koszulka Avocado", price: "221.50", imagePath: "clothes9.jpg" },
];
const products = ref(createRandomList(50, baseClothes));
const selectedPage = ref(1);
const itemsPerPage = 10;
const maxPages = Math.ceil(products.value.length / itemsPerPage);
const paginatedItems = ref([]);
function setPageTo(page) {
  selectedPage.value = page;
}
function update() {
  const start = (selectedPage.value - 1) * itemsPerPage;
  paginatedItems.value = products.value.slice(start, start + itemsPerPage);
}
function previousPage(page) {
  if (selectedPage.value > 1) {
    selectedPage.value--;
  }
  update();
}
function nextPage(page) {
  if (selectedPage.value < maxPages) {
    selectedPage.value++;
  }
  update();
}
update();
</script>

<template>
  <div
    class="container mb-6 is-flex is-flex-direction-column is-flex-justify-center"
  >
    <h1
      class="is-size-2 has-text-weight-bold has-text-black my-6 has-text-centered"
    >
      Products
    </h1>
    <div class="is-flex is-justify-content-center mb-6 custom-gap">
      <button
        @click="previousPage"
        class="button is-black is-small"
        :disabled="selectedPage === 1"
      >
        Previous
      </button>
      <p class="is-size-5 my-auto">
        Page {{ selectedPage }} out of {{ maxPages }}
      </p>
      <button
        @click="nextPage"
        class="button is-black is-small"
        :disabled="selectedPage === maxPages"
      >
        Next
      </button>
    </div>
    <div class="grid mb-6">
      <TileTemplate
        class="cell"
        v-bind:cloth="cloth"
        v-bind:size="3"
        v-for="cloth in paginatedItems"
      />
    </div>
    <div class="mx-6 has-text-gray-light">
      <p>
        W sezonie AW 2019 nie dzielimy kolekcji na kilka zamkniętych grup, lecz
        stawiamy na wybrane kolory i budujemy wokół nich przenikające się między
        sobą szafy, kapsuły. Główne kolory to cynamon, rudy brąz, butelkowa
        zieleń, niebieski, granat i szarość oraz bordo. Przeważać zdecydowanie
        będą modele romantyczne, sukienki rozkloszowane dołem, długości midi w
        klimatach boho, kwiatowe. W rękawach dużo bufek jako motyw przewodni.
        Powraca również fontaź w nowym odświeżonym wydaniu. Dużo marszczeń i
        wiązań. Jest lekko i zwiewnie. Pojawia się również styl trenczowy – w
        płaszczach i sukienkach. Poza gładkimi tkaninami pojawi się również
        kratka nawiązująca do angielskiego stylu z przełomu wieków. Dużo
        romantycznych kwiatowych wzorów. Zwierzęce printy w kolorowym wydaniu.
      </p>
    </div>
  </div>
</template>

<style scoped>
.custom-gap {
  gap: 2rem;
}
.grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.cell {
  width: 25rem;
  position: relative;
  -webkit-box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  box-shadow: 2px 13px 35px -20px rgba(0, 0, 0, 1);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.cell:hover {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
}
</style>
