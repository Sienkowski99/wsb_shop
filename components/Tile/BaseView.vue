<script setup>

const clothes = [
    { id: 1, name: "Marynarka zielona", price: "266.99", imagePath: "clothes1.jpg" },
    { id: 2, name: "Biała koszulka", price: "300.00", imagePath: "clothes2.jpg" },
    { id: 3, name: "Spódnica Magenta", price: "221.50", imagePath: "clothes3.jpg" },
    { id: 4, name: "Spódnica zółta", price: "150.99", imagePath: "clothes4.jpg" },
    { id: 5, name: "Spódnica czarna", price: "300.00", imagePath: "clothes5.jpg" },
    { id: 6, name: "Płaszcz Borra", price: "221.50", imagePath: "clothes6.jpg" },
    { id: 7, name: "Bluzka biała", price: "130.00", imagePath: "clothes7.jpg" },
    { id: 8, name: "Bluzka czarna", price: "130.00", imagePath: "clothes8.jpg" },
    { id: 9, name: "Koszulka Avocado", price: "221.50", imagePath: "clothes9.jpg" }
]
</script>

<template>
    <div>
        <div class="tile is-ancestor">
            <TileTemplate v-bind:cloth="cloth" v-for="cloth in clothes.slice(0, 3)" />
        </div>
        <div class="tile is-ancestor">
            <TileTemplate v-bind:cloth="cloth" v-for="cloth in clothes.slice(3, 6)" />
        </div>
        <div class="tile is-ancestor">
            <TileTemplate v-bind:cloth="cloth" v-for="cloth in clothes.slice(6, 9)" />
        </div>
    </div>
</template>