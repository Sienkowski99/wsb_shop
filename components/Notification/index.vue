<script setup>
const isVisible = ref(false);
const progress = ref(100);

function showNotification() {
  isVisible.value = true;
  progress.value = 100;
  const interval = setInterval(() => {
    if (progress.value > 0) {
      progress.value -= 0.5;
    } else {
      isVisible.value = false;
      clearInterval(interval);
    }
  }, 10);
}

function closeNotification() {
  isVisible.value = false;
  progress.value = 100;
}

const shoppingCart = useShoppingCart();
const lastKnownLength = ref(shoppingCart.itemsCount);

watchEffect(() => {
  if (shoppingCart.itemsCount > lastKnownLength.value) {
    showNotification();
  }
  lastKnownLength.value = shoppingCart.itemsCount;
});
</script>

<template>
  <div v-if="isVisible" class="notification is-primary mx-6">
    <button class="delete" @click="closeNotification"></button>
    <span class="is-size-5">Produkt został dodany do koszyka!</span>
    <progress class="progress is-small is-black" :value="progress" max="100" />
  </div>
</template>

<style scoped>
.notification {
  position: sticky;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  background-color: #283a4e;
}
.progress {
  margin-top: 8px;
}
</style>
