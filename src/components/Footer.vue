<template>
  <div>
    <v-divider></v-divider>
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
import { useDarkModeStore } from '../stores/Store'
import { useGetColors } from '../composables/useGetColors'

import footerLinks from '../data/footerLinks.json'

const darkMode = useDarkModeStore()
const colors = useGetColors('background')
const secondaryColors = useGetColors('background', undefined , true);

</script>