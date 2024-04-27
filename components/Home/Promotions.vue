<template>
  <section class="section newsletter-section px-6 has-text-black mb-6">
    <div class="container is-flex">
      <HomeInformation
        title="Skorzystaj z promocji"
        text="Odwiedzając naszą stronę zawsze możesz liczyć na ciekawe promocje"
        icon="percent"
      />
      <HomeInformation
        title="wysyłka"
        text="Gwarantujemy wysyłkę w ciągu 24h od zaksięgowania płatności"
        icon="truck-fast"
      />
      <HomeInformation
        title="Bezpieczne zakupy"
        text="Kupując w naszym sklepie masz gwarancję bezpiecznych zakupów i
          płatności"
        icon="lock"
      />
    </div>
  </section>
  <HomeCollections />
</template>

<style scoped>
@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
</style>
