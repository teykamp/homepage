<script lang="ts">
  import Grid from 'svelte-grid-responsive';
  import LandingBox from './lib/LandingBox.svelte'
  import data from "./data.json"
</script>

  <Grid container>
    <Grid xs={12} md={12} lg={6}>
      <LandingBox data="{data.engineer}"/>
    </Grid>
    <Grid xs={12} md={12} lg={6}>
      <LandingBox data="{data.developer}"/>
    </Grid>
  </Grid>

<style>

</style>
