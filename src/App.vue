<template>
  <div>
    <v-sheet :style="{
      'background-color': 
        `${store.darkMode ? store.darkColor.background : store.lightColor.background}`,
      'color':
        `${store.darkMode ? store.darkColor.text : store.lightColor.text}`,
    }">
      <v-container class="d-flex">
        <v-spacer></v-spacer>
        <v-btn 
          @click="store.toggleDarkMode()"
          variant="text"
          density="compact"
        >{{ store.darkMode ? 'Light' : 'Dark' }}</v-btn>
      </v-container>
    </v-sheet>
    <!-- <v-divider /> -->
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from './stores/Store';
import MainContent from './components/MainContent.vue';

const store = useDarkModeStore();
</script>