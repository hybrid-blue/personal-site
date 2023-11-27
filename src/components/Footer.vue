<script setup>
  import { ref } from 'vue';
  // defineProps({})

  const year = ref();
  year.value = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="d-flex justify-content-center">
            <p>&copy; Aaron Ifill {{ year }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
