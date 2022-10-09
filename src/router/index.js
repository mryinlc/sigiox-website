import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Memeber from '../components/Memeber'
import News from '../components/News'
import Paper from '../components/Paper'
import Patent from '../components/Patent'
import Project from '../components/Project'
import Seminar from '../components/Seminar'
import Notice from '../components/Notice'

Vue.use(VueRouter)

const router = new VueRouter({
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
      path: '/notice',
      component: Notice
    },
    {
      path: '/seminar',
      component: Seminar
    }
  ]
})

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

export default router
