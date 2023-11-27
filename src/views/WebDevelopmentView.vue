<script setup>
  import { ref } from 'vue';
	import IconWordpress from '../components/icons/IconWordpress.vue';
	import IconVue from '../components/icons/IconVue.vue';
	import IconReact from '../components/icons/IconReact.vue';
	import IconHtml from '../components/icons/IconHtml.vue';
	import IconCss from '../components/icons/IconCss.vue';
	import IconAws from '../components/icons/IconAws.vue';
	import IconNode from '../components/icons/IconNode.vue';
	import IconCode from '../components/icons/IconCode.vue';
  import IconJavascript from '../components/icons/IconJavascript.vue';
  import IconCaretDown from '../components/icons/IconCaretDown.vue';
  import IconGithub from '../components/icons/IconGithub.vue';
  import IconLinkedin from '../components/icons/IconLinkedin.vue';

	import setFadeInSections from '../composables/setFadeInSections';

	import Footer from '../components/Footer.vue';
  import BottomBackground from '../components/BottomBackground.vue';

	setFadeInSections();

  const digitalBaseRate = 120;

  const sizes = ref();
  const pages = ref();
  const prices = ref();

  const priceRoundUp = (price) => Math.ceil(price);

  sizes.value = [
    'Small ',
    'Medium',
    'Large '
  ];

  pages.value = [
    '(4 pages - 6 pages)',
    '(7 pages - 10 pages)',
    '(11 pages - 15+ pages)'
  ];

  prices.value = [
    `£${priceRoundUp(digitalBaseRate) * 3} - £${priceRoundUp(digitalBaseRate) * 5}`,
    `£${priceRoundUp(digitalBaseRate) * 5} - £${priceRoundUp(digitalBaseRate) * 10}`,
    `£${priceRoundUp(digitalBaseRate) * 10} - £${priceRoundUp(digitalBaseRate) * 15}`
  ];

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
      <!-- <div class="distance-1 position-absolute home__hero-gradient"></div> -->
			<div class="container distance-2">
				<div class="row">
					<div class="col-md-7 col-12 d-flex justify-content-center align-items-center order-md-1 order-2">
						<h1>Web Development</h1>
					</div>
					<div class="col-md-5 col-12 hero-icon d-flex justify-content-center align-items-center order-md-2 order-1">
						<!-- <img class="w-100" src="../assets/img/web-development.jpeg" /> -->
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
              <img class="web-developer__image" src="../assets/img/web-dev-desk.png">
              <p class="fs-6 fst-italic text-center">I can make neat little graphics as well!</p>
            </div>
            <div>
              <h2>I can make websites you know</h2>
              <p>I am self-taught in Front End Developer, specialising in Javascript and UX/UI development.</p>
              <p>I have over 7 years of industry experience working across multiple agencies, remote working, using the latest in frontend and backend technologies and practices. I always approach my work with enthusiasm and endless drive, solving complex problems and meeting project deadlines.</p>
              <p>I strive to be the best in building websites to fulfill the needs of everyone.</p>
            </div>
          </div>
        </div>
      </section>
			<section class="container fade-up home__section-two d-flex flex-column" ref="sectionTwo">
        <div class="home__section row">
          <div class="col-12 mb-5">
            <h2>What I can do</h2>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconHtml />
							<div class="mt-1 fs-4 text-center">HTML5</div>
            </div>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconCss />
							<div class="mt-1 fs-4 text-center">CSS3</div>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconJavascript />
							<div class="mt-1 fs-4 text-center">JavaScript</div>
            </div>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconWordpress />
							<div class="mt-1 fs-4 text-center">Wordpress</div>
						</div>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconVue />
							<div class="mt-1 fs-4 text-center">Vue</div>
            </div>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconReact />
							<div class="mt-1 fs-4 text-center">React</div>
            </div>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconNode />
							<div class="mt-1 fs-4 text-center">NodeJS</div>
            </div>
          </div>
					<div class="col-md-3 col-6 mb-4">
            <div class="d-flex flex-column align-items-center justify-content-center large-icon">
							<IconAws />
							<div class="mt-1 fs-4 text-center">Amazon Web Services</div>
            </div>
          </div>
        </div>
      </section>
      <section class="container fade-up home__section-three" ref="sectionThree">
        <div class="home__section row">
          <div class="col-12 d-flex flex-column">
            <div>
              <h2>The work I've done</h2>
            </div>
            <div>
              <ul class="square-list illustration">
                <li>
                  <a class="square-item sqpuare-item--small square-item_border" href="https://github.com/hybrid-blue/katsuJS" target="_blank">
                    <div class="border-one"></div>
                    <div class="square-item__desc">
                        <h3>KatsuJS</h3>
                        <span>JavaScript</span>
                    </div>
                    <img src="https://picsum.photos/300" />
                    <div class="border-two"></div>
                  </a>
                </li>
                <li>
                  <a class="square-item sqpuare-item--small square-item_border" href="https://github.com/hybrid-blue/vue-gallery-viewer" target="_blank">
                    <div class="border-one"></div>
                    <div class="square-item__desc">
                        <h3>Vue Gallery Viewer</h3>
                        <span>Vue.js</span>
                    </div>
                    <img src="@/assets/img/vue-gallery-viewer.jpg" />
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
              <!--
              <p>Here is a basic outline of the price ranges</p>
              <div class="price-table row mb-4 d-none d-md-flex">
                <div class="col-4 price-table__row">
                  <div class="row">
                    <div class="col price-table__cell fw-bold py-2">Sizes</div>
                  </div>
                  <div class="row" v-for="(size, i) in sizes" :key="i">
                    <div class="col price-table__cell py-2">{{ size }}</div>
                  </div>
                </div>
                <div class="col-4 price-table__row">
                  <div class="row">
                    <div class="col price-table__cell fw-bold py-2">Pages</div>
                  </div>
                  <div class="row" v-for="(page, i) in pages" :key="i">
                    <div class="col price-table__cell py-2">{{ page }}</div>
                  </div>
                </div>
                <div class="col-4 price-table__cell price-table__row">
                  <div class="row">
                    <div class="col price-table__cell fw-bold py-2">Prices</div>
                  </div>
                  <div class="row" v-for="(price, i) in prices" :key="i">
                    <div class="col price-table__cell py-2">{{ price }}</div>
                  </div>
                </div>
              </div>

              <div class="price-table row mb-4 d-md-none d-flex">
                <div class="col-12 price-table__row">
                  <div class="row mb-4" v-for="(size, i) in sizes" :key="i">
                    <div class="col-12 price-table__cell fw-bold">{{ size }} website</div>
                    <div class="col-6"><div class="fw-bold text-center">Pages</div><div class="text-center">{{ pages[i] }}</div></div>
                    <div class="col-6"><div class="fw-bold text-center">Prices</div><div class="text-center">{{ prices[i] }}</div></div>
                  </div>
                </div>
              </div>
              -->


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