<template>
  <panel title="Description">
    <v-flex xs6>
      <img  :src="medicament.title" />
      <br />
      {{ medicament.title }}
      
    </v-flex>
  </panel>
</template>

<script>
import Panel from './Panel.vue';
export default {
  components: { Panel },
  props: ["medicament"],
};
</script>

<style scoped>

</style>