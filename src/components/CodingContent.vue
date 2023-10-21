<template>
  <div 
    class="resume-content" 
    :style="{
      'min-height': '100vh',
      ...colors,
  }">
    <v-sheet
      v-for="(project, key) in text"
      :key="key"
      :style="{
        ...colors
      }"
    >
      <v-card-title>
        {{ project.title }}
      </v-card-title>
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
const language = useLanguageStore()
const text = computed(() => language.content[language.language].projects)
</script>
