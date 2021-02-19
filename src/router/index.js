import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.access_token
  if (to.name === 'Login' && isAuth) next('/')
  if (to.name === 'Home' && !isAuth) next('/login')
  if (to.name === 'Register' && isAuth) next('/')
  // if (to.name === 'Home' && !isAuth) next({ name: 'Login' })
  else next()
})

export default router
