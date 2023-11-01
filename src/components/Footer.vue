<template>
    <v-divider></v-divider>
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
                  ref="contactForm"
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
                        style="min-width: 300px;"
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
                    type="submit"
                  >Send Email</v-btn>
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
import { useDisplay } from 'vuetify'

import footerLinks from '../data/footerLinks.json'

const { lgAndUp, mdAndUp } = useDisplay()

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

// require('dotenv').config()

// const sendEmail = () => {
//       emailjs.sendForm('service_d98il4k', 'template_npvs9ui', contactForm.value, 'V-BWoXu67Cs6ht84n')
//         .then((result) => {
//             console.log('SUCCESS!', result.text);
//         }, (error) => {
//             console.log('FAILED...', error.text);
//         });
//     }

const sendEmail = async () => {
  try {
    // Create a new HTMLFormElement
    const formElement = document.createElement('form');

    // Create form controls and add them to the form element
    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameInput.value = contactForm.value.name;
    formElement.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.value = contactForm.value.email;
    formElement.appendChild(emailInput);

    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    messageInput.value = contactForm.value.message;
    formElement.appendChild(messageInput);


    await emailjs.sendForm('serviceId', 'templateId', formElement, 'publicKey');

  } catch (error) {
    console.log({ error });
  }
  // // Reset form field
  // this.name = ''
  // this.email = ''
  // this.message = ''
}

</script>