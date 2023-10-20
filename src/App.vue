<template>
  <div>
    <v-sheet :style="{
      ...colors,
      'position': 'fixed',
      'top': 0,
      'width': '100%',
      'z-index': 99,
    }">
      <v-container class="d-flex">
        <p>T<span :style="{
          'color': store.darkMode ? store.darkColor.accent : store.lightColor.accent
        }">.</span> Eykamp</p>
        <v-spacer></v-spacer>
        <v-btn 
          @click="store.toggleDarkMode()"
          variant="text"
          density="comfortable"
          :style="{
            'color': store.darkMode ? store.darkColor.accent : store.lightColor.accent
          }"
        >{{ store.darkMode ? 'EN' : 'DE' }}</v-btn>
        <!-- fix colors above, make black in light mode? -->
        <v-btn 
          @click="store.toggleDarkMode()"
          :icon="store.darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="text"
          size="small"
          density="comfortable"
        ></v-btn>
      </v-container>
      <v-divider />
    </v-sheet>
    <main-content />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from './stores/Store';
import { useGetColors } from './composables/useGetColors'

import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

const store = useDarkModeStore();

const colors = useGetColors('background')
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Martel&family=Playfair+Display&family=Roboto+Slab:wght@300&family=Young+Serif&display=swap');
body {
  font-family: 'Playfair Display', serif;
  font-family: 'Young Serif', serif;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

* {
  transition-property: background-color, color;
  transition-duration: 500ms;
}
</style>