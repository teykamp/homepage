<template>
  <div class="resume-content" style="height: 100vh">
    <v-card>
      <v-card-title>dfasdasdas</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>Summary</v-list-item-title>
            <v-list-item-subtitle>dasdsadasdsa</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Experience</v-list-item-title>
            <v-list-item-subtitle>
              <v-row v-for="experience in experiences" :key="experience.id">
                <v-col cols="2">{{ experience.year }}</v-col>
                <v-col cols="10">{{ experience.position }} at {{ experience.company }}</v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Education</v-list-item-title>
            <v-list-item-subtitle>
              <v-row v-for="education in educations" :key="education.id">
                <v-col cols="2">{{ education.year }}</v-col>
                <v-col cols="10">{{ education.degree }} at {{ education.school }}</v-col>
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
const experiences = [{
  id: 1,
  year: 2020,
  position: "idk something",
  company: "something else"
}, {
  id: 2,
  year: 2021,
  position: "idk something",
  company: "something else"
}, {
  id: 3,
  year: 2022,
  position: "idk something",
  company: "something else"
}]

const educations = [{
  id: 1,
  year: 2020,
  degree: "idk something",
  school: "something else"
}, {
  id: 2,
  year: 2021,
  degree: "idk something",
  school: "something else"
}, {
  id: 3,
  year: 2022,
  degree: "idk something",
  school: "something else"
}]
</script>
