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
          <div class="d-flex justify-content-end">
            <p>&copy; Aaron Ifill {{ year }} | <a href="https://github.com/hybrid-blue/personal-site" target="_blank">Git Repo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
