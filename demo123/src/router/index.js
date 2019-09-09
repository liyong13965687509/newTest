import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EchartsPage from '@/components/EchartsPage'
import ElementTable from '@/components/ElementTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/EchartsPage',
      name: 'EchartsPage',
      component: EchartsPage
    },
    {
      path: '/ElementTable',
      name: 'ElementTable',
      component: ElementTable
    },
  ]
})
