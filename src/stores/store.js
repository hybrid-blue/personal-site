import { ref } from 'vue'
import { defineStore } from 'pinia'

import IconWordpress from '../components/icons/IconWordpress.vue';
import IconVue from '../components/icons/IconVue.vue';
import IconReact from '../components/icons/IconReact.vue';
import IconHtml from '../components/icons/IconHtml.vue';
import IconCss from '../components/icons/IconCss.vue';
import IconAws from '../components/icons/IconAws.vue';
import IconNode from '../components/icons/IconNode.vue';
import IconJavascript from '../components/icons/IconJavascript.vue';

export const useStore = defineStore('store', () => {
  const navigation = ref([]);
  const skills = ref([]);
  const projects = ref([]);
  const artworks = ref([]);
  const gallery = ref([]);

  navigation.value = [
    {name: 'About', link: '/'},
    {name: 'Web Development', link: '/web-development'},
    {name: 'Illustration', link: '/illustration'},
    {name: 'Contact', link: '/contact'},
  ]

  skills.value = [
    {name: 'HTML5', icon: IconHtml},
    {name: 'CSS3', icon: IconCss},
    {name: 'JavaScript', icon: IconJavascript},
    {name: 'Wordpress', icon: IconWordpress},
    {name: 'Vue', icon: IconVue},
    {name: 'React', icon: IconReact},
    {name: 'NodeJS', icon: IconNode},
    {name: 'Amazon Web Services', icon: IconAws},
  ]

  projects.value = [
    {name: 'KatsuJS', keyLanguage: 'Javascript', image: '/img/projects/katsujs-logo.svg', url: 'https://github.com/hybrid-blue/katsuJS'},
    {name: 'Vue Gallery Viewer', keyLanguage: 'Vue.js', image: '/img/projects/vue-gallery-viewer.jpg', url: 'https://github.com/hybrid-blue/vue-gallery-viewer'},
  ]

  artworks.value = [
    {name: 'Pumpkin Imp', image: 'pumpkin-imp.jpg', thumbnail: 'pumpkin-imp-thumbnail.jpg', alt: 'Pumpkin Imp for Halloween'},
    {name: 'Cardboard Man', image: 'carboard-man.jpg', thumbnail: 'carboard-man-thumbnail.jpg', alt: 'A vector-based illustration'},
    {name: 'Cafe Diorama', image: 'diorama-shop.jpg', thumbnail: 'diorama-shop-thumbnail.jpg', alt: 'An illustration of a snug cafe'},
    {name: 'Stalybridge Station', image: 'stalybrigde-station.jpg', thumbnail: 'stalybrigde-station-thumbnail.jpg', alt: 'A illustration of Stalybridge station and the Buffet Bar'},
    {name: 'Manchester Library', image: 'manchester-library.jpg', thumbnail: 'manchester-library-thumbnail.jpg', alt: 'A illustration of the Mancehster Library'},
    {name: 'KatsuJS', image: 'katsujs-logo.svg', thumbnail: 'katsujs-logo.svg', alt: 'The logo I created for my project KatsuJS'},
  ]


  return { navigation, skills, projects, artworks }
})
