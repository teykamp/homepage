<template>
  <div 
    class="resume-content" 
    :style="{
      ...colors,
      // 'min-height': '100vh',
      'padding-left': mdAndUp ? '20%' : '',
      'padding-right': mdAndUp ? '20%' : '',
      'padding-top': '10px',
    }"
  >
    <v-sheet
      :style="{
        ...colors,
        'border': mdAndUp ? 'solid 6px' : '',
        'margin-top': mdAndUp ? '' : '30px',
    }">
      <h2 class="text-center mt-8">
        Experience
      </h2>
      <v-sheet
        v-for="(experience, key) in text"
        :key="key"
        class="pa-6"
        :id="key"
        :style="{
          ...colors,
          'margin': 'auto',
          'max-width': '800px',
        }"
      >
        <div class="d-flex justify-space-between">
          <v-card-title 
            :style="{
              'font-size': mdAndUp ? '' : '1em',
              'max-width': '86%',
            }"
            :class="show[key-1] ? 'text-wrap' : ''"
          >
            {{ experience.title }}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="toggleShow(key - 1)"
              density="comfortable"
              size="small"
              :icon="show[key - 1] ? 'mdi-minus' : 'mdi-plus'"
            ></v-btn>
            <!-- :text="show[key-1] ? 'Show Less' : 'Show More'"
            style="font-family: Martel;" -->
          </v-card-actions>
        </div>
        <v-card-subtitle 
          :style="{
            'font-family': 'Martel',
            'max-width': '300px',
          }">
          <div class="d-flex">
            <v-col>
              <v-icon v-if="experience.company">mdi-map-marker</v-icon>
              {{ experience.company }}
            </v-col>
            <v-col>
              <v-icon v-if="experience.year">mdi-calendar</v-icon>
              {{ experience.year }}
            </v-col>
          </div>
        </v-card-subtitle>
        <v-expand-transition>
          <div v-show="show[key-1]">
            <v-divider></v-divider>
            <v-card-text 
              v-for="accomplishment in experience.accomplishments"
              :key="accomplishment"
              style="font-family: Roboto Slab;"
            >
              {{ accomplishment }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-sheet>
      <v-btn
        @click.prevent="open"
        class="ma-6 mt-2"
        style="font-family: Roboto Slab;"
        prepend-icon="mdi-file-pdf-box"
      >C.V./Resume</v-btn>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { useGetColors } from '../composables/useGetColors'
import { useLanguageStore } from '../stores/Store'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const colors = useGetColors('background')
// figure out some way to have the currently selected one highlighted...
// const selectedColors = useGetColors('primary')
const language = useLanguageStore()
// @ts-ignore
const text = computed(() => language.content[language.language].resume)
const length = Object.keys(text.value).length
const show = ref(Array.from( { length } , () => false))
const currentKey = ref<number>()
const toggleShow = (key: number) => {
  if (key === currentKey.value) {
    show.value[key] = !show.value[key];
  } else {
    if (currentKey.value !== undefined) {
      show.value[currentKey.value] = false;
    }
    currentKey.value = key;
    show.value[key] = true;
  }
}

const open = () => {
  window.open('../data/resume.pdf', '_blank')
}
</script>