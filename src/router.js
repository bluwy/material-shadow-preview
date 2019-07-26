import Vue from 'vue'
import Router from 'vue-router'
const Null = () => import('./views/Null.vue')
const Home = () => import('./views/Home.vue')
const Download = () => import('./views/Download.vue')
const Learn = () => import('./views/Learn.vue')
const About = () => import('./views/About.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: Null
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'donwload',
      component: Download
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
