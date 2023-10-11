<template>
  <div>
    <v-sheet :style="{
      'height': '5em',
      'background-color': 
        `${store.darkMode ? store.darkColor.background : store.lightColor.background}`,
      'color':
        `${store.darkMode ? store.darkColor.text : store.lightColor.text}`,
    }">
      Title
    </v-sheet>
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from './stores/Store';
import MainContent from './components/MainContent.vue';

const store = useDarkModeStore();
</script>