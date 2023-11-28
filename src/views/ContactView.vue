<script setup>
  import setFadeInSections from '../composables/setFadeInSections';
  setFadeInSections();
</script>

<template>
  <div class="contact__body">
    <main>
      <div class="home__hero position-relative">
        <div class="container z-1">
          <div class="row">
            <div class="col-12 d-flex flex-column align-items-md-start align-items-center">
              <h1 class="title-underline mb-4 text-md-start text-center">Get in touch</h1>
              <div class="mb-4 text-md-start text-center">
                <a class="fs-4" href="mailto:aaronifill@gmail.com" target="_top">aaronifill@gmail.com</a>
              </div>
              <div class="mb-4 text-md-start text-center">
                <a class="fs-4" href="tel:07766029273" target="_top">07766029273</a>
              </div>
              <div>
                <a class="button mx-auto" href="aaron-ifill.pdf">View CV / Resumé</a>
              </div>
            </div>
          </div>
        </div> 
        <div class="contact__background">
          <svg width="100%" height="100%" class="position-absolute contact__background-pattern-one">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle>
            </pattern>
            <rect  id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        <div class="contact__background">
          <svg width="100%" height="100%" class="position-absolute contact__background-pattern-two">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle>
            </pattern>
            <rect  id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>
