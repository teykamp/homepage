<template>
  <v-sheet 
    :style="{
      ...colors,
      'height': '100vh',
    }">
      <v-sheet :style="{
        ...colors, 
        'height': '50vh',
      }"></v-sheet>
    <v-container class="d-flex">
      <h2>
        {{ text.en.title[0] }}
        <span>{{ text.en.title[1] }}</span>
        {{ text.en.title[2] }}
        <span>{{ text.en.title[3] }}</span>
        {{ text.en.title[4] }}
      </h2>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDarkModeStore, useLanguageStore } from '../stores/Store'

const darkMode = useDarkModeStore()
const language = useLanguageStore()

const colors = computed(() => {
  return {
      'background-color': 
      `${darkMode.darkMode ? darkMode.darkColor.background : darkMode.lightColor.background}`,
      'color':
      `${darkMode.darkMode ? darkMode.darkColor.text : darkMode.lightColor.text}`,
    }
})

const text = computed(() => {
  return language.content
})
</script>

<style scoped>
span {
  color: v-bind('darkMode.darkColor.gold');
}

span:hover {
  text-decoration: underline;
}
</style>