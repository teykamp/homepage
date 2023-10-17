<template>
  <div>
    <v-sheet :style="{
      ...colors,
    }">
      <v-container>
        <p>T<span :style="{
          'color': darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent
        }">.</span> Eykamp</p>
        <v-row>
          CONTACT FORM goes here
        </v-row>
        <v-row class="d-flex justify-center my-6">
          <v-btn
            v-for="link in footerLinks"
            :key="link.ref"
            :icon="link.icon"
            density="comfortable"
            :href="link.ref"
            target="_blank"
            class="mx-2"
            :style="{
              ...secondaryColors,
              /* add hover accent colors maybe */
          }"></v-btn>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref } from 'vue'
import { useDarkModeStore } from '../stores/Store'
import footerLinks from '../data/footerLinks.json'

const darkMode = useDarkModeStore()

const createColors = (backgroundKey: string = 'background', textKey: string = 'text', inverse: boolean = false): Ref<Record<string, string>> => computed(() => {

  if (inverse) return {
    'background-color': darkMode.darkMode ? darkMode.lightColor[backgroundKey] : darkMode.darkColor[backgroundKey],
    'color': darkMode.darkMode ? darkMode.lightColor[textKey] : darkMode.darkColor[textKey],
  }

  return {
    'background-color': darkMode.darkMode ? darkMode.darkColor[backgroundKey] : darkMode.lightColor[backgroundKey],
    'color': darkMode.darkMode ? darkMode.darkColor[textKey] : darkMode.lightColor[textKey],
  }
})

const colors = createColors('background')
const secondaryColors = createColors('background', undefined , true);

</script>