<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Create Medicament">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="medicament.title"
          ></v-text-field>
          <v-text-field
            label="Description"
            required
            :rules="[required]"
            v-model="medicament.description"
          ></v-text-field>
          <v-text-field
            label="Price"
            required
            :rules="[required]"
            v-model="medicament.price"
          ></v-text-field>
        </form>
         <div class="danger-alert" v-html="error" />
        <v-btn class="cyan" @click="createMedicament"> Create </v-btn>
      </panel>
    </v-flex>

    <v-flex xs6>
      <panel title="Medicament Picture" class="ml-2">
        <v-text-field label="Picture" multi-line></v-text-field>
      </panel>

      <br />
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from "./Panel.vue";
import MedicamentService from "../services/MedicamentService";

export default {
  data() {
    return {
      medicament: {
        title: null,
        description: null,
        price: null,
      },
      required: (value) => !!value || "Required.",
      error:null
    };
  },
  components: {
    Panel,
  },
  methods: {
    async createMedicament() {
      const areAllFieldsFilledIn = Object.keys(this.medicament).every(
        (key) => !!this.medicament[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }

      try {
        await MedicamentService.createMedicament(this.medicament);
        this.$router.push({
          name: "Medicaments",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.danger-alert{
  color: red;
}
</style>