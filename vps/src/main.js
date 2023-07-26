import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import TestPage from './TestPage.vue'
import HomePage from './HomePage.vue'
import TryFreePage from './TryFreePage.vue'
const router = createRouter({
  routes: [{
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/new-page',
    name: 'new-page',
    component: TestPage
  },
  {
    path: '/try-free',
    name: 'try-free',
    component: TryFreePage
  }
],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
