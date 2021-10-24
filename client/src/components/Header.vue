<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" dark @click="navigateTo({ name: 'HelloWorld' })">
        Node Vus js Express App
      </span></v-toolbar-title
    >
        <v-toolbar-items>
      <v-btn 
         
        dark
        :to="{
          name: 'Medicaments'
        }">
        Medicaments
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!-- <router-link to="/register">
        <v-btn flat dark> Sign up </v-btn>
      </router-link> -->
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        dark
        @click="navigateTo({ name: 'Login' })"
      >
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        dark
        @click="navigateTo({ name: 'Register' })"
      >
        Sign up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" dark @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
        this.$router.push({
          name: "HelloWorld",
        });
    },
  },
};
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #e9e;
}
</style>
