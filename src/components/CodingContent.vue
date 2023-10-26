<template>
  <div :style="{
        ...colors,
  }">
    <h2 
      class="text-center pt-16 pb-2"
      
    >Projects</h2>
    <div 
      class="resume-content d-flex justify-center flex-wrap pb-16" 
      :style="{
        // 'min-height': '100vh',
        ...colors,
      }"
    >
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
        <v-card-text style="font-family: Roboto Slab;">
          {{ project.description }}
        </v-card-text>
        <v-card-actions class="d-inline" style="font-family: Martel;">
          <v-btn
            v-if="project.src"
            text="Project Source Code"
            prepend-icon="mdi-github"
            class="mt-2"
            :href="project.src"
            target="_blank"
          ></v-btn>
          <v-btn
            v-if="project.deploy"
            text="Project Deployment"
            prepend-icon="mdi-link"
            class="mt-2"
            :href="project.deploy"
            target="_blank"
          ></v-btn>
        </v-card-actions>
        <v-card-actions 
          class="d-flex flex-wrap" 
          :style="{
          'position': 'absolute',
          'bottom': '0'
        }">
          <v-chip
            v-for="(tag, key) in project.tags"
            :key="key"
            :color="tag"
            variant="outlined"
            class="mt-2 mr-2"
          >
            {{ key }}
          </v-chip>
        </v-card-actions>
      </v-card>
    </div>
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
