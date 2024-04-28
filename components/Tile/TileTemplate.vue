<script setup>
const props = defineProps(["cloth", "size"]);
const shoppingCart = useShoppingCart();
const quantity = ref(1);
</script>

<template>
  <div class="tile is-parent p-0" :class="size ? `is-`.concat(size) : `is-4`">
    <article class="tile is-child box">
      <figure class="image">
        <img :src="cloth.imagePath" />
        <div class="product-hover-details">
          <label for="quantity">Ilość:</label>
          <input id="quantity" type="number" v-model="quantity" min="1" max="100"/>
          <button class="addToCart" @click="shoppingCart.addToCart(cloth,quantity)">Dodaj do koszyka</button>
        </div>
      </figure>
      <br />
      <p class="title is-5">{{ cloth.name }}</p>
      <p class="subtitle is-6">
        Już od: <span class="is-italic is-size-5">{{ cloth.price.replace('.',',') }} zł</span>
      </p>
    </article>
  </div>
</template>

<style scoped>
.product-hover-details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    opacity: 0;
    transition: opacity 0.3s ease; 
    z-index: 2;
}


.image:hover .product-hover-details {
    transform: translateY(0); 
    opacity: 1;
}


#quantity {
    width: 3rem;
    border: 1px solid #ccc; 
    padding: 0.5rem;
    text-align: center; 
}

.addToCart {
    background-color: #000; 
    color: white; 
    padding: 0.5rem 1rem; 
    border: none; 
    cursor: pointer; 
    text-transform: uppercase; 
    font-weight: bold; 
    letter-spacing: 1px; 
    transition: background-color 0.3s; 
}

.addToCart:hover {
    background-color: #333; /* Darker shade on hover */
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>