import Vue from 'vue'
import Router from 'vue-router'
import Employees from '@/components/Employees'
import CreateEmployee from '@/components/CreateEmployee'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employees',
      component: Employees
    },
    {                         
    path: '/createemployee',
    name: 'CreateEmployee',
    component: CreateEmployee
   }
  ]
})
