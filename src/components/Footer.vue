<template>
  <div>
    <v-divider></v-divider>
    <v-sheet :style="{
      ...colors,
    }">
    <!-- something broken here cus wont fill up page on smDown -->
      <v-container class="d-flex justify-center">
        <div>
          <p>T<span :style="{
            'color': darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent,
          }">.</span> Eykamp</p>
          <v-card
            :style="{
              'background-color': darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent,
              'width': mdAndUp ? '1200px' : '100%',
            }"
          >
            <v-card-title class="text-center">Contact me</v-card-title>
            <div class="d-flex justify-center">
              <v-sheet 
                class="rounded-lg pa-6"
                :style="{
                  'width': mdAndUp ? '60%' : '100%',
                }"
              >
                <v-form
                  v-model="valid"
                  @submit.prevent
                >
                  <div class="d-flex align-center" style="width: 100%;">
                    <v-text-field
                      :rules="nameRules"
                      placeholder="Name"
                    ></v-text-field>
                    <v-text-field
                      :rules="emailRules"
                      placeholder="Email"
                    ></v-text-field>
                  </div>
                  <v-textarea
                    placeholder="Message"
                    :rules="messageRules"
                  ></v-textarea>
                </v-form>
              </v-sheet>
            </div>
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
          </v-card>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useDarkModeStore } from '../stores/Store'
import { useGetColors } from '../composables/useGetColors'
import { useDisplay } from 'vuetify'

import footerLinks from '../data/footerLinks.json'

const { mdAndUp } = useDisplay()

const darkMode = useDarkModeStore()
const colors = useGetColors('background')
const secondaryColors = useGetColors('primary');

const valid = ref(false)
const contactForm = ref({
  email: '',
  name: '',
  message: '',
})

type ValidationRule = (value: string) => true | string;

const nameRules: ValidationRule[] = [
  (value) => {
    if (value) return true;
    return 'Name is required.';
  },
  (value) => {
    if (value?.length && value.length <= 50) return true;
    return 'Name must be less than 50 characters.';
  },
]

const emailRules: ValidationRule[] = [
  (value) => {
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
    return 'Must be a valid e-mail.'
  }
]

const messageRules: ValidationRule[] = [
  (value) => {
    if (value) return true;
    return 'Message is Required.';
  }
]
</script>