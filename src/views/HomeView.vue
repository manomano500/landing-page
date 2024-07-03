<template>
  <div class="bg-cover bg-center h-screen  flex-col justify-center items-center" style="background-image: url('/assets/background-home-desktop.jpg')">
    <NavBar />

    <div class="flex justify-center items-center text-white max-w-screen-lg px-8">
      <div class="w-1/2 pr-8">
        <h1 class="text-l md:text-l font-bold">SO, YOU WANT TO TRAVEL TO</h1>
        <p class="text-7xl md:text-[5rem] font-bold">SPACE</p>
        <p class="text-xs mt-4">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll take you for the ride of a lifetime!</p>
      </div>
      <div class="w-1/2">
        <img src="@/assets/images/image-europa.png" alt="illustration-home" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can go here if needed */
</style>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
