<template>
  <div>
    <v-sheet :style="{
      'background-color': 
        `${store.darkMode ? store.darkColor.background : store.lightColor.background}`,
      'color':
        `${store.darkMode ? store.darkColor.text : store.lightColor.text}`,
      'position': 'fixed',
      'top': 0,
      'width': '100%',
      'z-index': 99,
    }">
      <v-container class="d-flex">
        <p>T<span :style="{
          'color': store.darkColor.gold
        }">.</span> Eykamp</p>
        <v-spacer></v-spacer>
        <v-btn 
          @click="store.toggleDarkMode()"
          variant="text"
          density="comfortable"
          :style="{
            'color': store.darkColor.gold
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
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from './stores/Store';
import MainContent from './components/MainContent.vue';

const store = useDarkModeStore();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Young+Serif&display=swap');
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