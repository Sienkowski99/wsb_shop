<script setup>

const props = defineProps(["cloth", "size"]);
const shoppingCart = useShoppingCart();
</script>

<template>
  <div class="tile is-parent p-0" :class="size ? `is-`.concat(size) : `is-4`">
    <article class="tile is-child box">
      <figure class="image">
        <img :src="cloth.imagePath" />
      </figure>
      <br />
      <p class="title is-5">{{ cloth.name }}</p>
      <p class="subtitle is-6">
        Już od: <span class="is-italic is-size-5">{{ cloth.price.replace('.',',') }} zł</span>
      </p>
      <button @click="shoppingCart.addToCart(cloth)">Dodaj do koszyka</button>
    </article>
  </div>
</template>
