<template>
  <v-layout column>
    <v-flex xs6>
       <Panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <div class="error" v-html="error" />
          <br />
          <v-btn class="cyan" @click="login"> Login </v-btn>
        </div>
       </Panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthentificationService from "../services/AuthentificationService";
import Panel from './Panel.vue'


export default {
  data() {
    return {
      email: " ",
      password: " ",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch('setUser', response.data.user)

        this.$router.push({
          name: "Medicaments",
        });
      } catch (error) {
        this.error = error.response.data.error;
        console.log("hi");
      }
    },
  },
   components: {
    Panel
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
