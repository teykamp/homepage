<template>
  <article id="container">
    <section
      id="child"
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
        <v-container 
          class="d-flex pa-10"
          :style="{
            'max-width': '800px',
          }"
        >
          <h2 :class="mdAndUp ? 'ml-16' : ''" style="max-width: 26em">
            <!-- TODO: check that max-width parameter to see if necessary -->
            {{ text.en.title[0] }}
            <span
              @click="scrollToElement('engineeringContent', 60)"
              style="white-space: nowrap;"
            >{{ text.en.title[1] }}</span>
            {{ text.en.title[2] }}
            <span 
              @click="scrollToElement('codingContent',60)"
              style="white-space: nowrap;"
            >{{ text.en.title[3] }}</span>
            {{ text.en.title[4] }}
          </h2>
        </v-container>
        <div class="d-flex justify-center">
          <v-btn
            v-if="!mdAndUp"
            @click="scrollToElement('acheivements')"
            :style="{
              'background-color': darkMode.darkMode ? darkMode.lightColor.background : darkMode.darkColor.background,
              'color': darkMode.darkMode ? darkMode.lightColor.text : darkMode.darkColor.text,
              'margin-top': '200px',
            }"
            icon="mdi-arrow-down"
          ></v-btn>
        </div>
      </v-sheet>
      <v-sheet
        :style="{
          ...colors,
          'width': `${mdAndUp ? '50%' : '100%'}`,
      }">
        <v-sheet
          v-if="mdAndUp"
          :style="{
            ...colors, 
            'height': '20vh',
        }"></v-sheet>
        <v-card
          :style="{
            ...secondaryColors,
            'min-height': '600px',
            'max-width': '900px'
          }"
          :class="`d-flex justify-center ${mdAndUp ? 'mr-16' : ''} ${smAndUp ? 'mx-16' : ''}`">
          <v-card-title class="mt-6" id="acheivements">
            Acheivements
          </v-card-title>
        </v-card> 
      </v-sheet>
    </section>
    <section id="child">
      <engineering-content id="engineeringContent"/>
    </section>
    <section id="child">
      <coding-content id="codingContent"/>
    </section>
  </article>
</template>

<script setup lang="ts">
import { computed, Ref } from 'vue'
import { useDarkModeStore, useLanguageStore } from '../stores/Store'
import { useDisplay } from 'vuetify'

import EngineeringContent from './EngineeringContent.vue'
import CodingContent from './CodingContent.vue'

const { smAndUp, mdAndUp } = useDisplay()

const darkMode = useDarkModeStore()
const language = useLanguageStore()

const createColors = (colorKey: string): Ref<Record<string, string>> => computed(() => {
  return {
    'background-color': darkMode.darkMode ? darkMode.darkColor[colorKey] : darkMode.lightColor[colorKey],
    'color': darkMode.darkMode ? darkMode.darkColor.text : darkMode.lightColor.text,
  };
});

const colors = createColors('background');
const secondaryColors = createColors('primary');


function scrollToElement(elementId: string, offset: number = 85 /* Height of header */) {
  const element = document.getElementById(elementId);
  if (element) {
    const scrollOffset = element.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  }
}


const text = computed(() => {
  return language.content
})
</script>

<style scoped>
span {
    position: relative;
    color: v-bind('darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent');
    display: inline-block;
    cursor: pointer;
}

span:after {
    position: absolute;
    left: 0px;
    background-color: v-bind('darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent');
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

/* #container {
  height: 100vh; 
  overflow-y: scroll; 
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(100%);
  scroll-snap-type: mandatory;
}

#child {
  scroll-snap-align: start;
} */
</style>