<template>
  <div v-if="show" class="modal is-active">
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
  const issueContent = ref('');
  const emit = defineEmits(["closed"])
  const props = defineProps({
    show: Boolean
  });

  const toggleModal = () => {
      issueContent.value = '';
      emit('closed');
  };

  const submitIssue = () => {
    console.log('Issue submitted: ', issueContent.value);
    toggleModal();
  };
</script>