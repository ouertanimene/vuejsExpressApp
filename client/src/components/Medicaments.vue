<template>
  <v-flex xs6 offset-xs3>
    <Panel title="Medicaments">
      <v-btn
        slot="action"
        @click="navigateTo({ name: 'create-medicament' })"
        class="cyan accent-2"
        light
        small
        absolute
        right
        middle
        fab
      >
        <v-icon>add</v-icon>
      </v-btn>

      <div
        v-for="medicament in medicaments"
        class="song"
        :key="medicament.title"
      >
        <v-layout>
          <v-flex>
            <panel :title="medicament.title">
              <div class="med-title">{{ medicament.title }}</div>
              <div class="med-desc">{{ medicament.description }}</div>
              <div class="med-price">{{ medicament.price }}</div>

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
            </panel>
          </v-flex>
        </v-layout>
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
      medicaments: null,
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
        },
      ],
    };
  },
  components: {
    Panel,
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  async mounted() {
    this.medicaments = (await MedicamentService.getAllMedicaments()).data;
    console.log("list", this.medicaments);
  },
};
</script>
<style scoped>
.error {
  color: red;
}
.song {
  padding: 20px;

  overflow: hidden;
}
.med-title {
  font-size: 30px;
}
.med-desc {
  font-size: 24px;
}
.med-price {
  font-size: 18px;
}
</style>
