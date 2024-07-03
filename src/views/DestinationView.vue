<template>
  <div class="bg-cover bg-center h-screen flex-col justify-center items-center" style="background-image: url('/assets/background-destination-desktop.jpg')">
    <NavBar />

    <div class="text-white space-y-4 mt-8">


      <div v-if="selectedDestination">

        <div class="text-center space-y-4  flex">
          <div class=" m-8">
          <p class="text-gray opacity-60 mb-4">  01 Pick Your Destination</p>
            <img :src="getImageUrl()" alt="Destination Image" class="w-auto h-auto">

          </div>

          <div class=" w-3/4">
            <nav class="mb-4">
              <ul class="flex space-x-4 justify-center">
                <li v-for="(destination, index) in destinations" :key="destination.name">
                  <a href="#" @click.prevent="selectDestination(index)" :class="{ 'nav-link-active': selectedDestinationIndex === index }" class="nav-link">{{ destination.name }}</a>
                </li>
              </ul>
            </nav>
            <div class="mr-14">
              <h1 class="text-5xl leading-relaxed  tracking-widest font-thin">{{ selectedDestination.name }}</h1>
              <p class="text-sm font-thin text-justify" >{{ selectedDestination.description }}</p>
              <div class="border-t m-4  "></div>

              <div class="flex justify-around">

               <div>
                 <h2 class="text-xs block font-thin">Avg. Distance</h2>
                 <p class="block font-thin">{{ selectedDestination.distance }}</p>
               </div>
                <div>
                  <h2 class="text-xs block font-thin">Est. Travel Time</h2>
                  <p class="block font-thin"> {{ selectedDestination.travel }}</p>
                </div>
              </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import data from '@/data.json';
import NavBar from '@/components/NavBar.vue';

const destinations = ref(data.destinations);
const selectedDestinationIndex = ref(0);
const selectedDestination = ref(destinations.value[selectedDestinationIndex.value]);

const selectDestination = (index) => {
  selectedDestinationIndex.value = index;
};

watch(selectedDestinationIndex, (newIndex) => {
  selectedDestination.value = destinations.value[newIndex];
});

const getImageUrl = () => {
  return selectedDestination.value.images.png;
};
</script>
