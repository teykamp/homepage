<template>
  <v-sheet :style="{
    ...colors,
  }">
    <v-container class="d-flex justify-center">
      <div>
        <p class="pb-6 pl-3">T<span :style="{
          'color': darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent,
        }">.</span> Eykamp</p>
        <v-card
          :style="{
            'border-radius': lgAndUp ? '' : '0',
            'background-color': darkMode.darkMode ? darkMode.darkColor.accent : darkMode.lightColor.accent,
            'width': lgAndUp ? '1200px' : '100vw',
            
          }"
        >
          <v-card-title class="text-center">Contact me</v-card-title>
          <div class="d-flex justify-center">
            <v-sheet 
              :class="`${mdAndUp ? 'rounded-lg' : ''} pa-6`"
              :style="{
                'width': mdAndUp ? '60%' : '100%',
              }"
            >
              <v-form
                ref="form"
                v-model="valid"
                @submit.prevent="sendEmail"
                :style="{
                  'font-family': 'Roboto Slab',
                }"
              >
                <v-row class="d-flex justify-space-between">
                  <v-col>
                    <v-text-field
                      v-model="contactForm.name"
                      style="min-width: 300px;"
                      :rules="nameRules"
                      placeholder="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="contactForm.email"
                      style="min-width: 300px; margin-bottom: 30px"
                      :rules="emailRules"
                      placeholder="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-textarea
                  v-model="contactForm.message"
                  placeholder="Message"
                  :rules="messageRules"
                ></v-textarea>
                <v-btn
                  class="mt-2"
                  type="submit"
                >Send Message</v-btn>
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
            }"></v-btn>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import emailjs from 'emailjs-com'

import { ref } from 'vue'

import { useDarkModeStore } from '../stores/Store'
import { useGetColors } from '../composables/useGetColors'
import { useSnackbar } from '../stores/Store'

import { useDisplay } from 'vuetify'

import footerLinks from '../data/footerLinks.json'

const { lgAndUp, mdAndUp } = useDisplay()

const snackbar = useSnackbar()
const darkMode = useDarkModeStore()
const colors = useGetColors('background')
const secondaryColors = useGetColors('primary')

const valid = ref(false)
const form = ref()
const contactForm = ref({
  email: '',
  name: '',
  message: '',
})

type ValidationRule = (value: string) => true | string

const nameRules: ValidationRule[] = [
  (value) => {
    if (value) return true
    return 'Name is required.'
  },
  (value) => {
    if (value?.length && value.length <= 50) return true
    return 'Name must be less than 50 characters.'
  },
]

const emailRules: ValidationRule[] = [
        value => {
          if (value) return true
          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true
          return 'E-mail must be valid.'
        },
      ]

const messageRules: ValidationRule[] = [
  (value) => {
    if (value) return true
    return 'Message is Required.'
  }
]

const validateField = (rules: ValidationRule[], value: string): true | string => {
  for (const rule of rules) {
    const result = rule(value)
    if (result !== true) {
      return result
    }
  }
  return true
}

const sendEmail = async () => {
  const nameValidation = validateField(nameRules, contactForm.value.name)
  if (nameValidation !== true) {
    console.error('Name validation error: ' + nameValidation)
    return
  }

  const emailValidation = validateField(emailRules, contactForm.value.email)
  if (emailValidation !== true) {
    console.error('Email validation error: ' + emailValidation)
    return
  }

  const messageValidation = validateField(messageRules, contactForm.value.message)
  if (messageValidation !== true) {
    console.error('Message validation error: ' + messageValidation)
    return
  }

  try {
    // Create a new HTMLFormElement
    const formElement = document.createElement('form')

    // Create form controls and add them to the form element
    const nameInput = document.createElement('input')
    nameInput.name = 'name'
    nameInput.value = contactForm.value.name;
    formElement.appendChild(nameInput);

    const emailInput = document.createElement('input')
    emailInput.name = 'email'
    emailInput.value = contactForm.value.email;
    formElement.appendChild(emailInput);

    const messageInput = document.createElement('textarea')
    messageInput.name = 'message'
    messageInput.value = contactForm.value.message
    formElement.appendChild(messageInput)

    await emailjs.sendForm( import.meta.env.VITE_APP_SERVICE_ID,
                            import.meta.env.VITE_APP_TEMPLATE_ID, 
                            formElement, 
                            import.meta.env.VITE_APP_PUBLIC_KEY
                          )
    // console.log('success')
    
                          
  } catch (error) {
    console.log({ error })
  }
  // still has email and message with errors after reseting form
  form.value.reset()
  snackbar.showSnackbar('Message sent.')
}

</script>