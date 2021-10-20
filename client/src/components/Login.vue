<template>
  <v-layout column>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
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
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthentificationService from "../services/AuthentificationService";

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
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
