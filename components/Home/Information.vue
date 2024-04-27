<script setup>
const props = defineProps(["title", "text", "icon"]);
</script>

<template>
  <div
    class="is-flex is-flex-direction-column is-flex-justify-content-center column has-text-centered mx-6"
  >
    <font-awesome v-bind:icon="icon" class="mb-5 is-size-2" />
    <p class="informations__title">{{ title }}</p>
    <p class="informations__text">{{ text }}</p>
  </div>
</template>

<style scoped>
.informations__text {
  margin: 0 1rem;
}
.informations__title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
