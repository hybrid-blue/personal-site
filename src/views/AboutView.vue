<script setup>
import setFadeInSections from '../composables/setFadeInSections';
import Footer from '../components/Footer.vue';

setFadeInSections();

</script>

<template>
  <div class="contact__body">
    <main>
      <div class="home__hero position-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="title-underline mb-4">About myself</h1>
              <div class="mb-4">
                <a class="fs-4" href="mailto:aaronifill@gmail.com" target="_top">aaronifill@gmail.com</a>
              </div>
              <a class="button">View CV / Resumé</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>