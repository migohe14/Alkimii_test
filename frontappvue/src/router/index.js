import Vue from 'vue'
import Router from 'vue-router'
import Employees from '@/components/Employees'
import CreateEmployee from '@/components/CreateEmployee'
import DeleteEmployee from '@/components/DeleteEmployee'
import UpdateEmployee from '@/components/UpdateEmployee'


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
   },
   {                         
    path: '/deletemployee',
    name: 'DeleteEmployee',
    props: true,
    component: DeleteEmployee
   },
   {                         
    path: '/updateemployee',
    name: 'UpdateEmployee',
    props: true,
    component: UpdateEmployee
   }
  ]
})
