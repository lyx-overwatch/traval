import Vue from 'vue'
import Router from 'vue-router'
import ToDo from '@/components/todo'
import Login from '@/components/login'
import Person from '@/components/person'
import TravalIndex from '@/components/traval/index'
import TravalCity from '@/components/traval/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDo
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/traval',
      name: 'traval',
      component: TravalIndex
    },
    {
      path: '/traval/city',
      name: 'travalCity',
      component: TravalCity
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
