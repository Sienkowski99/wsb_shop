<script setup>
const props = defineProps(["cloth"]);
</script>

<template>
  <div class="tile is-parent is-4 p-0">
    <article class="tile is-child box">
      <figure class="image">
        <img :src="cloth.imagePath" />
      </figure>
      <br />
      <p class="title is-5">{{ cloth.name }}</p>
      <p class="subtitle is-6">
        Już od: <span class="is-italic is-size-5">{{ cloth.price }} zł</span>
      </p>
    </article>
  </div>
</template>
