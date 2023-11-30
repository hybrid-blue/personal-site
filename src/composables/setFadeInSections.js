import { onMounted } from "vue";

const setFadeInSections = () => {

  const threshold = window.innerWidth < 992 ? 0.15 : 0.4;

    // Fade up observer
  const fadeUpObserver = new IntersectionObserver((elsToWatch) => {
    console.log(elsToWatch);
    elsToWatch.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add('faded');
        fadeUpObserver.unobserve(el.target);
        el.target.addEventListener("transitionend", () => {
          el.target.classList.remove('fade-up', 'faded');
        }, { once: true });
      }
    })
  }, {
    threshold
  });
  
  onMounted(() => {
    document.querySelectorAll('section').forEach((item) => {
      fadeUpObserver.observe(item);
    });
  });
}

export default setFadeInSections;