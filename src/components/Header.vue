<script setup>
  import { ref } from 'vue';
  import { useStore } from '../stores/store';
  import IconBars from '../components/icons/IconBars.vue';
  import IconCross from '../components/icons/IconCross.vue';
  import IconGithub from '../components/icons/IconGithub.vue';
  import IconLinkedin from '../components/icons/IconLinkedin.vue';

  const store = useStore();
  const navigation = ref();

  const openMenu = () => navigation.value.classList.add('mobile-nav-open');
  const closeMenu = () => navigation.value.classList.remove('mobile-nav-open');
</script>

<template>
  <header>
    <div class="navigation">
      <nav ref="navigation">
        <div class="navigation__mobile-button-close" @click="closeMenu">
          <IconCross />
        </div>
        <ul>
          <li v-for="(nav, index) in store.navigation" :key="index">
            <router-link :to="nav.link" @click="closeMenu">{{ nav.name }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="navigation__options">
        <div class="navigation__mobile-button" @click="openMenu">
          <IconBars />
        </div>
      </div>
    </div>
  </header>
</template>
