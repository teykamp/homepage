<template>
  <div class="resume-content" :style="{
      ...colors,
      'height': '100vh'
    }">
      <v-sheet
        v-for="(experience, key) in text"
        :key="key"
        class="pa-6"
        :style="{
      ...colors,
    }"
      >
        <v-card-title>
          {{ experience.title }}
        </v-card-title>
        <v-card-subtitle>
          <v-icon>mdi-map-marker</v-icon>
          {{ experience.company }}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="show[key-1] = !show[key-1]"
            text="Show More"
          ></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show[key-1]">
            <v-divider></v-divider>

            <v-card-text v-for="accomplishment in experience.accomplishments">
              {{ accomplishment }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-sheet>
    download Resume
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { useGetColors } from '../composables/useGetColors'
import { useLanguageStore } from '../stores/Store';

const colors = useGetColors('background');
const language = useLanguageStore()
const text = computed(() => {
  return language.content[language.language].resume
})
const length = Object.keys(text.value).length
const show = ref(Array.from( { length } , () => false))
</script>