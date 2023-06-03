<script lang="ts">
  import ArrowButton from "./ArrowButton.svelte";
  export let data
</script>

<div class="backingBox" style="background-color: {data.color};">
  <div class="title">I'm looking for a...'</div>
  <ArrowButton text="{data.title}"/>
</div>

<style scoped>
.backingBox {
  height: 100vh;
}
.title {
  padding-top: 45vh;
}
</style>