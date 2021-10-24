<template>
  <v-flex xs6 offset-xs3>
    <Panel title="Medicaments">
      <div v-for="medicament in medicamentss" class="song" :key="medicament.title">
        {{ medicament.title }}
        {{ medicament.description }}
        {{ medicament.price }}
      </div>

 
    </Panel>
  </v-flex>
</template>
<script>
import Panel from "./Panel";
import MedicamentService from "../services/MedicamentService";

export default {
  data() {
    return {
      medicaments:null,
      medicamentss: [
        {
          title: "panadol",
          description: "paracetamol",
          price: "4dt",
        },
         {
          title: "klipal",
          description: "paracetamol + codeine",
          price: "4dt",
        }
      ],
    };
  },
  components: {
    Panel,
  },
  async mounted(){
    this.medicaments= await MedicamentService.getAllMedicaments()

  }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
