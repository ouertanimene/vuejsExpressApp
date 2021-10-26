<template>
  <v-flex xs6 offset-xs3>
    <panel title="Informations">
      <v-layout>
        <v-flex>
          <div>
            <span class="details med-title">Title:</span>
            <span class="details med-value">{{ medicament.title }}</span>
          </div>

          <div>
            <span class="details med-title">Description:</span>
            <span class="details med-value">{{ medicament.description }}</span>
          </div>

          <div>
            <span class="details med-title">Price:</span>
            <span class="details med-value">{{ medicament.price }}</span>
          </div>
          <div>
            <span class="details med-title"> Therapeutic class:</span>
            <span class="details med-value"> --</span>
          </div>
          <div>
            <span class="details med-title"> Laboratory:</span>
            <span class="details med-value">--</span>
          </div>
          <div>
            <span class="details med-title"> Subclass:</span>
            <span class="details med-value">---</span>
          </div>

          <v-btn
            dark
            class="cyan"
            @click="
              navigateTo({
                name: 'medicament',
                params: {
                  medicamentId: medicament.id,
                },
              })
            "
          >
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </panel>
    <br />
    
    <description :medicament="medicament" ></description>
     
  </v-flex>
</template>
<script>
import Panel from "./Panel.vue";
import MedicamentService from "../services/MedicamentService";
import Description from './Description.vue';

export default {
  components: { Panel, Description },
  data() {
    return {
      medicament: null,
    };
  },
  async mounted() {
    const medId = this.$store.state.route.params.medicamentId;
    this.medicament = (await MedicamentService.viewMedicament(medId)).data;
  },
};
</script>

<style scoped>
.details {
  margin: 0 0 7px;
  padding: 0 0 7px;
  border-bottom: 1px dashed;
}
.med-title {
  float: left;
  width: 30%;
  font-weight: 700;
}
.med-value {
  float: left;
  width: 70%;
  text-align: right;
}
</style>