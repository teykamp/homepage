<template>
  <div class="resume-content" :style="{
      ...colors,
      'min-height': '100vh',
      'padding-left': mdAndUp ? '20%' : '',
      'padding-right': mdAndUp ? '20%' : '',
    }">
      <v-sheet
        :style="{
          ...colors,
          'border': mdAndUp ? 'solid 6px' : '',
      }">
        <v-sheet
          v-for="(experience, key) in text"
          :key="key"
          class="pa-6"
          :style="{
            ...colors,
            'margin': 'auto',
            'max-width': '800px',
          }"
        >
          <v-card-title :style="{
            'font-size': mdAndUp ? '' : '1em'
          }">
            {{ experience.title }}
          </v-card-title>
          <v-card-subtitle style="font-family: Martel; max-width: 300px;">
            <div class="d-flex">
              <v-icon>mdi-map-marker</v-icon>
              {{ experience.company }}
              <v-spacer></v-spacer>
              <v-icon>mdi-calendar</v-icon>
              {{ experience.year }}
            </div>
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="toggleShow(key-1)"
              density="comfortable"
              size="small"
              :text="show[key-1] ? 'Show Less' : 'Show More'"
              style="font-family: Martel;"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show[key-1]">
              <v-divider></v-divider>
              <v-card-text 
                v-for="accomplishment in experience.accomplishments"
                style="font-family: Roboto Slab;"
              >
                {{ accomplishment }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-sheet>
      </v-sheet>
    download Resume
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
</script>