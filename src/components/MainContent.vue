<template>
  <div
    :class="mdAndUp ? 'd-flex' : ''"
  >
    <v-sheet 
      :style="{
        ...colors,
        'height': '100vh',
        'width': `${mdAndUp ? '50%' : '100%'}`,
      }">
        <v-sheet :style="{
          ...colors, 
          'height': '35vh',
        }"></v-sheet>
      <v-container class="d-flex pa-10">
        <h2 :class="mdAndUp ? 'ml-16' : ''">
          {{ text.en.title[0] }}
          <span
            @click="scrollTop('jobOne')"
            style="white-space: nowrap;"
          >{{ text.en.title[1] }}</span>
          {{ text.en.title[2] }}
          <span 
            @click="scrollTop('jobTwo')"
            style="white-space: nowrap;"
          >{{ text.en.title[3] }}</span>
          {{ text.en.title[4] }}
        </h2>
      </v-container>
    </v-sheet>
    <v-sheet
      :style="{
        ...colors,
        'height': '100vh',
        'width': `${mdAndUp ? '50%' : '100%'}`,
    }">
      <v-sheet :style="{
        ...colors, 
        'height': '20vh',
      }"></v-sheet>
      <v-container
        :style="{
        ...colors, 
        'height': '40vh',
        'border': 'solid'
        }"
        class="d-flex justify-center">
        big increase
        lol
        funny
        good worker
      </v-container> 
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDarkModeStore, useLanguageStore } from '../stores/Store'
import { useDisplay } from 'vuetify' 

const { mdAndUp } = useDisplay()

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