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
        <!-- TODO: check that max-width parameter to see if necessary -->
          <h2 :class="mdAndUp ? 'ml-16' : ''" :style="{ 'max-width': '26em',
             'font-size': mdAndUp ? '2em' : '1.1em',
          }">
            {{ text.title[0] }}
            <span
              @click="scrollToElement('engineeringContent', 60)"
              style="white-space: nowrap;"
            >{{ text.title[1] }}</span>
            {{ text.title[2] }}
            <span
              @click="scrollToElement('codingContent',60)"
              style="white-space: nowrap;"
            >{{ text.title[3] }}</span>
            {{ text.title[4] }}
            <p class="mt-6" style="font-size: 0.75em; font-style: italic; font-family: Martel;">{{ text.subtitle }}</p>
            <!-- <p style="font-size: 0.45em; font-family: Roboto Slab; font-weight: 400;">More About Me</p> -->
          </h2>
        </v-container>
        <div class="d-flex justify-center">
          <v-btn
            v-if="!mdAndUp"
            @click="scrollToElement('acheivements')"
            :style="{
              'background-color': darkMode.darkMode ? darkMode.lightColor.background : darkMode.darkColor.background,
              'color': darkMode.darkMode ? darkMode.lightColor.text : darkMode.darkColor.text,
              'margin-top': '150px',
            }"
            icon="mdi-arrow-down"
          ></v-btn>
        </div>
      </v-sheet>
      <v-sheet
        class="d-flex align-center"
        :style="{
          ...colors,
          'width': `${mdAndUp ? '50%' : '100%'}`,
      }">
        <v-sheet
          :style="{
            ...secondaryColors,
            // 'min-height': '70vh', // might need to fix on tall screens
            'width': '100%',
            'max-width': '900px',
            'padding': '20px',
          }"
          :class="`d-block ${mdAndUp ? 'mr-16' : ''} ${smAndUp ? 'mx-16' : ''}`"
        >
        <!-- add some styling here based on the if it is displayed on mobile or not (i.e text size and spacing between list items) -->
        
        <v-list :style="{
          ...secondaryColors,
          'padding-left': '20px',
          'padding-bottom': '20px',
        }">
          <v-card-title class="mt-6 text-center" id="acheivements">
            Acheivements
          </v-card-title>
            <v-list-item 
              v-for="(acheivement, key) in text.acheivements"
              :key="key"
              :style="{
                ...secondaryColors,
                'font-family': 'Martel',
                'padding-left': `${xs ? '1%' : '10%'}`,
                'padding-right': `${xs ? '5%' : '10%'}`,
              }"
              class="mb-5"
            >
              {{ acheivement }}
            </v-list-item>
          </v-list>
        </v-sheet> 
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
import { computed } from 'vue'
import { useDarkModeStore, useLanguageStore } from '../stores/Store'
import { useDisplay } from 'vuetify'
import { useGetColors } from '../composables/useGetColors'
import { scrollToElement } from '../functions/scrollToElement'

import EngineeringContent from './EngineeringContent.vue'
import CodingContent from './CodingContent.vue'

const { xs, smAndUp, mdAndUp } = useDisplay()

const darkMode = useDarkModeStore()
const language = useLanguageStore()

const colors = useGetColors('background');
const secondaryColors = useGetColors('primary');

const text = computed(() => { return language.content[language.language] })
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