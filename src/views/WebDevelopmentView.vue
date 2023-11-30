<script setup>
  import { ref } from 'vue';
  import IconCode from '../components/icons/IconCode.vue';
  import IconCaretDown from '../components/icons/IconCaretDown.vue';
  import IconGithub from '../components/icons/IconGithub.vue';
  import IconLinkedin from '../components/icons/IconLinkedin.vue';

	import setFadeInSections from '../composables/setFadeInSections';

	import Footer from '../components/Footer.vue';
  import BottomBackground from '../components/BottomBackground.vue';

  import { useStore } from '../stores/store';

  const store = useStore();

  const { skills, projects } = store;

	setFadeInSections();

  const body = ref();
  const sectionOne = ref();
  const sectionTwo = ref();
  const sectionThree = ref();
  const sectionFour = ref();
  const sectionFive = ref();

  function moveDown () {
    const bodyElm = body.value;
    const sectionOneTopPos = sectionOne.value.offsetTop;
    const sectionOneHeight = sectionOne.value.clientHeight;

    const sectionTwoTopPos = sectionTwo.value.offsetTop;
    const sectionTwoHeight = sectionTwo.value.clientHeight;

    const sectionThreeTopPos = sectionThree.value.offsetTop;
    const sectionThreeHeight = sectionThree.value.clientHeight;

    const sectionFourTopPos = sectionFour.value.offsetTop;
    const sectionFourHeight = sectionFour.value.clientHeight;

    const sectionFiveTopPos = sectionFive.value.offsetTop;
    const sectionFiveHeight = sectionFive.value.clientHeight;

    const isMobile = () => {
      if (window.innerWidth < 992) return true;

      return false;
    }

    switch(true) {
      case sectionOne.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionOneTopPos + (isMobile() ? window.innerHeight : (sectionOneHeight - 100))));
        break;
      case sectionTwo.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionTwoTopPos + (isMobile() ? window.innerHeight : (sectionTwoHeight - 100))));
        break;
      case sectionThree.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionThreeTopPos + (isMobile() ? window.innerHeight : sectionThreeHeight)));
        break;
      case sectionFour.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionFourTopPos + (isMobile() ? window.innerHeight : sectionFourHeight)));
        break;
      case sectionFive.value.classList.contains('fade-up'):
        bodyElm.scroll(0, (sectionFiveTopPos + (isMobile() ? window.innerHeight : sectionFiveHeight)));
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
			<div class="container distance-2">
				<div class="row">
					<div class="col-md-7 col-12 d-flex justify-content-center align-items-center order-md-1 order-2">
						<h1>Web Development</h1>
					</div>
					<div class="col-md-5 col-12 hero-icon d-flex justify-content-center align-items-center order-md-2 order-1">
						<IconCode />
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
			<section class="container fade-up home__section-one" ref="sectionOne">
        <div class="home__section row">
          <div class="col-12 d-flex flex-column flex-lg-row">
            <div class="me-lg-4 me-0 mb-lg-0 mb-4 d-flex justify-content-lg-left justify-content-center flex-column">
              <img class="web-developer__image" src="/public/img/web-dev-desk.png">
              <p class="fs-6 fst-italic text-center">I can make neat little graphics as well!</p>
            </div>
            <div>
              <h2 class="text-lg-start text-center">I can make websites you know</h2>
              <p>I am self-taught in Front End Developer, specialising in Javascript and UX/UI development.</p>
              <p>I have over 7 years of industry experience working across multiple agencies, remote working, using the latest in frontend and backend technologies and practices. I always approach my work with enthusiasm and endless drive, solving complex problems and meeting project deadlines.</p>
              <p>I strive to be the best in building websites to fulfill the needs of everyone.</p>
            </div>
          </div>
        </div>
      </section>
			<section class="container fade-up home__section-two d-flex flex-column" ref="sectionTwo">
        <div class="home__section row">
          <div class="col-12 mb-5 text-left-lg text-center">
            <h2 class="text-center">What I can do</h2>
          </div>
					<div class="col-md-3 col-6 mb-4" v-for="(skill, i) in skills" :key="i">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<component :is="skill.icon"></component>
							<div class="mt-1 fs-4 text-center">{{ skill.name }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-three" ref="sectionThree">
        <div class="home__section row">
          <div class="col-12 d-flex flex-column">
            <h2 class="text-center">The work I've done</h2>
            <div>
              <ul class="square-list illustration">
                <li v-for="(project, i) in projects" :key="i">
                  <a class="square-item square-item--small square-item_border" :href="project.url" target="_blank">
                    <div class="border-one"></div>
                    <div class="square-item__desc">
                        <h3>{{ project.name }}</h3>
                        <span>{{ project.keyLanguage }}</span>
                    </div>
                    <img :src="project.image" alt="" />
                    <div class="border-two"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-two d-flex flex-column" ref="sectionFour">
        <div class="home__section row">
          <div class="col-12 mb-4">
            <h2 class="text-center">Check out my socials</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-2 col-6 mb-4">
              <div class="d-flex flex-column align-items-center justify-content-center large-icon">
                <a class="web-development__socials" href="https://github.com/hybrid-blue" target="_blank">
                  <IconGithub />
                  <div class="mt-1 fs-4 text-center">Github</div>
                </a>
              </div>
            </div>
            <div class="col-md-2 col-6 mb-4">
              <div class="d-flex flex-column align-items-center justify-content-center large-icon">
                <a class="web-development__socials" href="https://www.linkedin.com/in/aaron-ifill-866a61146/" target="_blank">
                  <IconLinkedin />
                  <div class="mt-1 fs-4 text-center">Linkedin</div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section class="container fade-up home__section-four justify-content-center" ref="sectionFive">
        <div class="row">
          <div class="col">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h2 class="text-center">Do you need a website built?</h2>
              <p class="text-center mb-4">Send me an email describing what kind of website you like <br /> and I'll help to come to be best solution possible along with a qoute.</p>
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
</template>