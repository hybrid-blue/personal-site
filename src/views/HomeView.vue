<script setup>
  import { ref } from 'vue';
  import IconIllustration from '../components/icons/IconIllustration.vue';
  import IconCode from '../components/icons/IconCode.vue';
  import IconCaretDown from '../components/icons/IconCaretDown.vue';

  import setFadeInSections from '../composables/setFadeInSections';
  import Footer from '../components/Footer.vue';
  import BottomBackground from '../components/BottomBackground.vue';

  setFadeInSections();

  const body = ref();
  const sectionOne = ref();
  const sectionTwo = ref();
  const sectionThree = ref();

  function moveDown () {
    const bodyElm = body.value;
    const sectionOneTopPos = sectionOne.value.offsetTop;
    const sectionOneHeight = sectionOne.value.clientHeight;

    const sectionTwoTopPos = sectionTwo.value.offsetTop;
    const sectionTwoHeight = sectionTwo.value.clientHeight;

    const sectionThreeTopPos = sectionThree.value.offsetTop;
    const sectionThreeHeight = sectionThree.value.clientHeight;

    const isMobile = () => {
      if (window.innerWidth < 992) return true;

      return false;
    }

    switch(true) {
      case sectionOne.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionOneTopPos + sectionOneHeight));
        break;
      case sectionTwo.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionTwoTopPos + (isMobile() ? window.innerHeight : (sectionTwoHeight - 100))));
        break;
      case sectionThree.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionThreeTopPos + (isMobile() ? window.innerHeight : sectionThreeHeight)));
        break;
      default:
        bodyElm.scroll(0, bodyElm.scrollHeight);
        break;
    }
  }
</script>

<template>
  <div class="home__body position-relative perspective" ref="body">
    <div class="home__hero position-relative preserve-3d">
      <div class="distance-1 position-absolute home__hero-gradient"></div>
      <img class="distance-1 hero-bg" src="/img/hero-large.jpg" alt="">
      <h1 class="distance-2">Web Developer<br />and<br />Comic Illustrator</h1>
      <div class="distance-0--rotate home__bg-shape home__bg-shape--shape-1"></div>
      <div class="distance-z--rotate home__bg-shape home__bg-shape--shape-2"></div>
    </div>
    <main class="home__main position-relative">
      <section class="container fade-up home__section-two" ref="sectionOne">
        <div class="home__section row">
          <div class="col-12">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h2>Hello there, my name is Aaron Ifill</h2>
              <p class="text-center fs-3">I am self-taught in Web Developer, specialising in Javascript and UX/UI development. I'm also an artist with a degree in BA Hons in Illustration.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-one" ref="sectionTwo">
        <div class="home__section row">
          <div class="col-12 d-flex flex-column flex-lg-row">
            <div class="me-lg-4 me-0 mb-lg-0 mb-4 d-flex justify-content-lg-left justify-content-center flex-column">
              <img class="home__portrait" src="/img/self-portrait-11-2023.jpg" alt="Self-protrait of Aaron Ifill by Aaron Ifill">
              <p class="fs-6 fst-italic text-center">Yes, thats me, drawn by me</p>
            </div>
            <div>
              <h2>An Introduction about myself</h2>
              <p>To some I know as that guy you see at your local pubs, drinking the finiest ales they have to offer. To others I am a web developer, whoses career has spanned for 7+ years and comic illustrator who has travesered to paths of nerd culture.</p>
              <p>When I'm not smacking the keyboard for code, conjuring up some art or scratching up a sketch outdoors (or at the pub). I'll be cooking up a mean Chilli, bold Curry, a heart-warming Bolognese or a tasty Ramen dish.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-four" ref="sectionThree">
        <div class="home__section row">
          <div class="col-12 d-flex flex-column">
            <div>
              <h2>Here are the services I can offer...</h2>
            </div>
            <div>
              <ul class="square-list square-list--home">
                <li>
                  <router-link class="square-item square-item_border" to="/web-development">
                    <div class="border-one"></div>
                    <div class="square-item__desc">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="d-flex align-items-center square-item__icon-wrapper">
                          <IconCode />
                        </div>
                        <h3>Web Developement</h3>
                      </div>

                    </div>
                    <div class="border-two"></div>
                  </router-link>
                </li>
                <li>
                  <router-link class="square-item square-item_border" to="/illustration">
                    <div class="border-one"></div>
                    <div class="square-item__desc">
                      <div class="d-flex align-items-center square-item__icon-wrapper">
                        <IconIllustration />
                      </div>
                      <h3>Illustration</h3>
                    </div>
                    <div class="border-two"></div>
                  </router-link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  <div class="move-down" @click="moveDown">
    <IconCaretDown />
  </div>
</template>
