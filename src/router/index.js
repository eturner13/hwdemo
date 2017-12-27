import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ]
})
