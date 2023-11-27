<script setup>
  import { ref } from 'vue';
	import IconIllustration from '../components/icons/IconIllustration.vue';
  import IconCaretDown from '../components/icons/IconCaretDown.vue';

	import setFadeInSections from '../composables/setFadeInSections';

	import Footer from '../components/Footer.vue';
  import BottomBackground from '../components/BottomBackground.vue';

	setFadeInSections();

  const isLightboxOpen = ref(false);
  const lightboxImage = ref(null);

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

  function lightboxOpen(img) {
    isLightboxOpen.value = true;
    lightboxImage.value = img;
  }

  function lightboxClose(e) {
    if (e.target.tagName !== 'IMG') {
      isLightboxOpen.value = false;
      lightboxImage.value = null;
    }
  }
</script>

<template>
  <div class="home__body position-relative perspective" ref="body">
    <div class="home__hero position-relative preserve-3d">
			<div class="container distance-2">
				<div class="row">
					<div class="col-md-7 col-12 d-flex justify-content-center align-items-center order-md-1 order-2">
						<h1>Illustration</h1>
					</div>
					<div class="col-md-5 col-12 hero-icon d-flex justify-content-center align-items-center order-md-2 order-1">
						<IconIllustration />
					</div>
				</div>
			</div>


      <div class="distance-1--rotate page__bg-shape page__bg-shape--shape-1"></div>
      <div class="distance-0--rotate page__bg-shape page__bg-shape--shape-2"></div>
			<div class="distance-za--rotate page__bg-shape page__bg-shape--shape-3"></div>
			<div class="distance-3--rotate page__bg-shape page__bg-shape--shape-4"></div>
			<div class="distance-2--rotate page__bg-shape page__bg-shape--shape-5"></div>
			<div class="distance-1--rotate page__bg-shape page__bg-shape--shape-6"></div>
    </div>
    <main class="home__main position-relative">
      <section class="container fade-up home__section-two" ref="sectionOne">
        <div class="home__section row">
          <div class="col-12">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h2>Your local illustrator</h2>
              <p class="text-center">I'm an Illustrator with a degree in BA Hons in Illustraor at Middlesex University in 2012.<br/>
              I work in a wide range of of mediums across both Digital and Traditional.<br/>
              My inspriations comes from all things nerdy, video games and the great outdoors.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-three" ref="sectionTwo"> 
        <div class="home__section row">
          <div class="col-12 d-flex flex-column">
            <div>
              <h2>The artwork I've done</h2>
            </div>
            <div>
              <ul class="square-list illustration">
                <li>
                  <div class="square-item sqpuare-item--small square-item_border"  @click="lightboxOpen('https://picsum.photos/300')">
                    <div class="border-one"></div>
                    <img src="https://picsum.photos/300" />
                    <div class="border-two"></div>
                  </div>
                </li>
                <li>
                  <div class="square-item square-item_border" @click="lightboxOpen('https://picsum.photos/300')">
                    <div class="border-one"></div>
                      <img src="https://picsum.photos/300" />
                    <div class="border-two"></div>
                  </div>
                </li>
								<li>
                  <div class="square-item square-item_border"  @click="lightboxOpen('https://picsum.photos/300')">
                    <div class="border-one"></div>
                      <img src="https://picsum.photos/300" />
                    <div class="border-two"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-four" ref="sectionThree">
        <div class="row">
          <div class="col-12">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h2 class="text-center">Intrested in my work?</h2>
              <p class="text-center">Feel free to contact me if you would like a piece of artwork form me or wish to collaborate on a project.</p>
              <router-link class="button" to="/contact">Get in touch</router-link>
            </div>
          </div>
        </div>
      </section>
      <BottomBackground />  
		</main>
		<Footer />
	</div>
  <div class="move-down" @click="moveDown">
    <IconCaretDown />
  </div>
  <Teleport to="body">
    <div v-if="isLightboxOpen" class="lightbox" @click="lightboxClose">
      <img class="lightbox__image" :src="lightboxImage" />
      <div class="lightbox__text">Click outside image to close</div>
    </div>
  </Teleport>
</template>