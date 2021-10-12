<template>
  <div id="app">
    <h1>Register</h1>
    <input name="email" type="email" placeholder="email" v-model="email" />
    <br />
    <input
      name="password"
      type="password"
      placeholder="password"
      v-model="password"
    />
    <button @click="register">Submit</button>
  </div>
</template>
<script>
import AuthentificationService from '../services/AuthentificationService'

export default {
  data () {
    return {
      email: ' ',
      password: ' '
    }
  },
  methods: {
    async register () {
      const response = await AuthentificationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
