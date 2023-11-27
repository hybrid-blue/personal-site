import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const navigation = ref([]);

  navigation.value = [
    {name: 'About', link: '/'},
    {name: 'Web Development', link: '/web-development'},
    {name: 'Illustration', link: '/illustration'},
    {name: 'Contact', link: '/contact'},
  ]

  return { navigation }
})
