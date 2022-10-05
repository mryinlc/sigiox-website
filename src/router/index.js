import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Memeber from '../components/Memeber'
import News from '../components/News'
import Paper from '../components/Paper'
import Patent from '../components/Patent'
import Project from '../components/Project'
import Seminar from '../components/Seminar'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/memeber',
      component: Memeber
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/paper',
      component: Paper
    },
    {
      path: '/patent',
      component: Patent
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/seminar',
      component: Seminar
    }
  ]
})
