<template>
  <div class="flex items-center  space-y-8 space-x-20 ">
    <div class="flex justify-start items-baseline flex-1">
      <img alt="Vue logo" src="@/assets/images/logo.svg" class="px-4 py-2" />
      <div class="border-t border-white border-opacity-50 w-full mt-4"></div> <!-- Thin vertical line -->

    </div>
    <nav class="flex justify-start items-center flex-1 text-white bg-opacity-50 backdrop-blur-lg h-12 space-x-4">
      <!-- Apply margin classes to router-links -->
      <router-link to="/" class="nav-link mr-6" :class="{ 'nav-link-active': $route.path === '/' }">00 Home</router-link>
      <router-link to="/about" class="nav-link mr-6" :class="{ 'nav-link-active': $route.path === '/about' }">01 About</router-link>

      <router-link to="/contact" class="nav-link mr-6" :class="{ 'nav-link-active': $route.path === '/contact' }">02 Contact</router-link>
      <router-link to="/destination" class="nav-link mr-6" :class="{ 'nav-link-active': $route.path === '/destination' }">03 Destination</router-link>
      <router-link to="/crew" class="nav-link mr-6" :class="{ 'nav-link-active': $route.path === '/crew' }">04 Crew</router-link>

    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
