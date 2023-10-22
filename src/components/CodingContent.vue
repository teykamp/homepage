<template>
  <div 
    class="resume-content d-flex justify-center flex-wrap" 
    :style="{
      'min-height': '100vh',
      ...colors,
  }">
    <v-card
      v-for="(project, key) in text"
      :key="key"
      class="mt-10"
      elevation="0"
      :style="{
        ...secondaryColors,
        'min-width': '350px',
        'max-width': '400px',
        'margin-right': smAndUp ? '20px' : '',
        'margin-left': smAndUp ? '20px' : '',
        'height': '400px',
      }"
    >
      <v-card-title>
        {{ project.title }}
      </v-card-title>
      <v-card-text>
        {{ project.description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { useGetColors } from '../composables/useGetColors'
import { useLanguageStore } from '../stores/Store'
import { useDisplay } from 'vuetify'


const { smAndUp } = useDisplay()
const colors = useGetColors('background')
const secondaryColors = useGetColors('primary')
const language = useLanguageStore()
const text = computed(() => language.content[language.language].projects)
</script>
