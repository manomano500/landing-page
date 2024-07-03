<template>
  <div class="bg-cover bg-center h-screen flex-col justify-center items-center" style="background-image: url('/assets/background-crew-desktop.jpg')">
    <NavBar />

    <div class="flex justify-between w-full max-w-6xl mx-auto">
      <!-- Crew Details Section -->
      <div class="flex flex-col justify-center   w-3/5 px-6">
        <div>
          <p class="text-gray-400 opacity-60 mb-4 ">02 MEET YOUR CREW</p>
        </div>
        <div v-for="(crewMember, index) in crew" :key="crewMember.name" class="crew-member text-white   font-thin">
          <div v-if="selectedCrewIndex === index" class="space-y-4">
            <p class="text-xl ">{{ crewMember.role }}</p>
            <h2 class="text-5xl font-thin">{{ crewMember.name }}</h2>
            <p class="text-sm">{{ crewMember.bio }}</p>
          </div>
        </div>
        <div class="flex justify-center space-x-4 mt-4">
          <button v-for="(crewMember, index) in crew" :key="index" @click="selectCrewMember(index)"
                  :class="{ 'dot-active': selectedCrewIndex === index }" class="dot"></button>
        </div>
      </div>

      <!-- Crew Image Section -->
      <div class="w-2/5">
        <img :src="getImageUrl()" alt="Crew Member Image" class="h-3/4">
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import data from "@/data.json";
import { ref } from "vue";
// const { ref } = Vue;

const crew = ref(data.crew);
const selectedCrewIndex = ref(0);

const selectCrewMember = (index) => {
  selectedCrewIndex.value = index;
};

const getImageUrl = () => {
  return crew.value[selectedCrewIndex.value].images.png;
};
</script>

<style scoped>
.crew-member {
  transition: opacity 0.3s ease;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
}

.dot-active {
  background-color: cyan;
}
</style>
