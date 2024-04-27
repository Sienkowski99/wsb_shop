<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <p class="menu-label">
          PORADNIK ZAKUPOWY
        </p>
        <ul class="menu-list">
          <li><a href="#">Metody płatności</a></li>
          <li><a href="#">Formy dostawy</a></li>
          <li><a href="#">Reklamacje</a></li>
          <li><a href="#">Zwroty, wymiana</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a @click="toggleModal">Zgłoś błąd</a></li>
        </ul>
      </div>
      <div class="column">
        <p class="menu-label">
          ZASADY I REGULAMINY
        </p>
        <ul class="menu-list">
          <li><a href="#">Regulamin sklepu</a></li>
          <li><a href="#">Regulamin karty stałego klienta</a></li>
          <li><a href="#">Regulamin karty podarunkowej</a></li>
          <li><a href="#">Saldo karty podarunkowej</a></li>
        </ul>
      </div>
      <div class="column">
        <p class="menu-label">
          O NAS
        </p>
        <ul class="menu-list">
          <li><a href="#">Regulamin sklepu</a></li>
          <li><a href="#">Regulamin karty stałego klienta</a></li>
          <li><a href="#">Regulamin karty podarunkowej</a></li>
          <li><a href="#">Saldo karty podarunkowej</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Zgłoś błąd</p>
        <button class="delete" aria-label="close" @click="toggleModal"></button>
      </header>
      <section class="modal-card-body">
        <textarea class="textarea" placeholder="Opisz błąd tutaj..." v-model="issueContent"></textarea>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="submitIssue">Submit</button>
        <button class="button" @click="toggleModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  const showModal = ref(false);
  const issueContent = ref('');
  const toggleModal = () => {
    showModal.value = !showModal.value;
    if (!showModal.value) issueContent.value = '';
  }
  const submitIssue = () => {
    console.log('Issue submitted: ', issueContent.value);
    toggleModal();
  }

</script>

<style scoped>
.container {
  padding: 1rem;
}

.menu-label {
  color: #363636;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  text-align: center
}

.menu-list {
  text-align: center;
  margin: 0;
  padding: 0.5rem 0;
}

.menu-list a {
  color: #4a4a4a;
  line-height: 1.5;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s;
}

.menu-list a:hover {
  text-decoration: underline;
  background-color: white;
}
</style>
