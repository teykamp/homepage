<template>
  <v-row
    class="d-flex"
  >
    <v-sheet 
      :style="{
        ...colors,
        'height': '100vh',
        
      }">
        <v-sheet :style="{
          ...colors, 
          'height': '40vh',
        }"></v-sheet>
      <v-container class="d-flex ml-16">
        <h2>
          {{ text.en.title[0] }}
          <span
            @click="scrollTop('jobOne')"
            class="d-inline"
          >{{ text.en.title[1] }}</span>
          {{ text.en.title[2] }}
          <span 
            @click="scrollTop('jobTwo')"
            class="d-inline"
          >{{ text.en.title[3] }}</span>
          {{ text.en.title[4] }}
        </h2>
      </v-container>
    </v-sheet>
    <v-sheet
      :style="{
        ...colors,
        'height': '100vh',
    }">
      <v-sheet :style="{
        ...colors, 
        'height': '20vh',
      }"></v-sheet>
      <v-container
        :style="{
        ...colors, 
        'height': '40vh',
        }"
        class="d-flex justify-center">
      </v-container> 
    </v-sheet>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDarkModeStore, useLanguageStore } from '../stores/Store'
// import { useDisplay } from 'vuetify' 

// const { xs, mdAndUp } = useDisplay()

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

const scrollTop = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element)
    window.scrollTo(0, element.offsetTop)
}

const text = computed(() => {
  return language.content
})
</script>

<style scoped>
span {
    position: relative;
    color: v-bind('darkMode.darkColor.gold');
    display: inline-block;
    cursor: pointer;
}

span:after {
    position: absolute;
    left: 0px;
    background-color: v-bind('darkMode.darkColor.gold');
    content: '';
    display: block;
    height: .1em;
    margin-top: -3px;
    transition: .2s;
    width: 0;
}

span:hover:after {
    width: 100%;
}
</style>