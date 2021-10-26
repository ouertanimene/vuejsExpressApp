import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Register from '../components/Register'
import Login from '../components/Login'
import Medicaments from '../components/Medicaments'
import CreateMedicament from '../components/CreateMedicament'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/medicaments',
      name: 'Medicaments',
      component: Medicaments
    },
    {
      path: '/medicaments/create',
      name: 'create-medicament',
      component: CreateMedicament
    }
  ]
})
