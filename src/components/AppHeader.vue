<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import BurgerMenu from './BurgerMenu.vue';

const menuActive = ref(false);
const router = useRouter();

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

onBeforeMount(() => {
  router.beforeEach((to, from, next) => {
    menuActive.value = false;
    next();
  });
});
</script>




<template>
    <header>
      <BurgerMenu @toggle-menu="toggleMenu" :active="menuActive" />
    </header>
</template>
