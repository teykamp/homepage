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
        <v-img
          :src="project.img"
          class="image"
          style="height:130px"
          cover
        >
          <div class="card-overlay">
            <v-card-title class="">
              {{ project.title }}
            </v-card-title>
          </div>
        </v-img>
        <v-card-text style="font-family: Roboto Slab;">
          {{ project.description }}
        </v-card-text>
        <v-card-actions 
          class="d-flex justify-space-around" 
          style="font-family: Martel; margin-top: -15px;"
        >
          <v-btn
            v-if="project.src"
            text="Code"
            prepend-icon="mdi-github"
            :href="project.src"
            target="_blank"
          ></v-btn>
          <v-btn
            v-if="project.deploy"
            text="Deploy"
            prepend-icon="mdi-link"
            :href="project.deploy"
            target="_blank"
          ></v-btn>
        </v-card-actions>
        <v-card-actions 
          class="d-flex flex-wrap pa-5" 
          :style="{
          'position': 'absolute',
          'bottom': '-5px',
        }">
          <v-chip
            v-for="(tag, key) in project.tags"
            :key="key"
            :color="tag"
            variant="outlined"
            size="small"
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
import { computed } from 'vue'

import { useGetColors } from '../composables/useGetColors'
import { useLanguageStore } from '../stores/Store'
import {useDarkModeStore } from '../stores/Store'
import { useDisplay } from 'vuetify'


const { smAndUp } = useDisplay()
const colors = useGetColors('background')
const secondaryColors = useGetColors('primary')
const language = useLanguageStore()
// @ts-ignore
const text = computed(() => language.content[language.language].projects)
const gradientColor = computed(() => {
  if (useDarkModeStore().darkMode) {
    return {
      gradient: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
      text: '#fff'
    }
  }
  return {
    gradient: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8))`,
    text: '#000'
  }
})
</script>

<style scoped>
.image {
  position: relative;
  padding: 0;
}
.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: v-bind('gradientColor.gradient');
  color: v-bind('gradientColor.text');
  padding: 10px;
  padding-bottom: 0px;
}
</style>