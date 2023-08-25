import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'


const routes = [
  {
    path: '/',
    component: Home
  }
 
  // Add more routes here
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
