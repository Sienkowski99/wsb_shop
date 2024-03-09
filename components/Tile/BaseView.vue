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

<script>
import TileTemplate from "./TileTemplate.vue";

export default {
    components: {
        TileTemplate
    },

    data() {
        return {
            clothes: [
                { name: "Marynarka zielona", price: '266,99', imagePath: "clothes1.jpg" },
                { name: "Biała koszulka", price: '300,00', imagePath: "clothes2.jpg" },
                { name: "Spódnica Magenta", price: '221,50', imagePath: "clothes3.jpg" },
                { name: "Spódnica zółta", price: '150,99', imagePath: "clothes4.jpg" },
                { name: "Spódnica czarna", price: '300,00', imagePath: "clothes5.jpg" },
                { name: "Płaszcz Borra", price: '221,50', imagePath: "clothes6.jpg" },
                { name: "Bluzka biała", price: '130,00', imagePath: "clothes7.jpg" },
                { name: "Bluzka czarna", price: '130,00', imagePath: "clothes8.jpg" },
                { name: "Koszulka Avocado", price: '221,50', imagePath: "clothes9.jpg" },
            ]
        }
    }
}
</script>