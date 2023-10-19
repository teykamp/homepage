<template>
  <div class="resume-content" style="height: 100vh">
    <v-card>
      <v-card-title>Resume stuff</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>Summary</v-list-item-title>
            <v-list-item-subtitle>dasdsadasdsa</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Experience</v-list-item-title>
            <v-list-item-subtitle>
              <v-row v-for="(experience, key) in text" :key="key">
                <v-col style="max-width: 60px">{{ experience.year }}</v-col>
                <v-col>{{ experience.title }} at {{ experience.company }}</v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    download Resume
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// import { useGetColors } from '../composables/useGetColors'
import { useLanguageStore } from '../stores/Store';

const language = useLanguageStore()
const text = computed(() => {
  return language.content[language.language].resume
})
</script>
