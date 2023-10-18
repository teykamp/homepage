<template>
  <div class="resume-content" style="height: 100vh">
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" md="4">
        <v-card class="project-card" elevation="2">
          <v-img :src="project.imageUrl" alt="Project Image" height="200"></v-img>
          <v-card-title style="font-family: Martel">{{ project.name }}</v-card-title>
          <v-card-text style="font-family: Roboto Slab">{{ project.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const projects = [
        {
          id: 1,
          name: "Project 1",
          description: "Description for Project 1",
          imageUrl: "https://example.com/project1.jpg",
        },
        {
          id: 2,
          name: "Project 2",
          description: "Description for Project 2",
          imageUrl: "https://example.com/project2.jpg",
        }]
</script>
