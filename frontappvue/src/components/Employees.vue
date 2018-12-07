<template>
 <div>
   <div class="mb-3">
       <button v-if="showTable == true" class="btn btn-primary" v-on:click="showFormEmployee()">Create employee</button>
       <button v-if="showTable == false" class="btn btn-secondary" v-on:click="showTableEmployee()">Show employees</button>
   </div>
  <table v-if="showTable == true" class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Department</th>
        <th scope="col">Salary</th>
      </tr>
    </thead>
    <tbody v-for="employee in employees" :key="employee.id">
      <tr>
        <td>{{ employee.name }}</td>
        <td>{{ employee.role }}</td>
        <td>{{ employee.departament }}</td>
        <td>{{ employee.salary }}</td>
      </tr>

    </tbody>
  </table>
  
    <b-form v-if="showTable == false">
      <b-form-group>
        <b-form-input 
                      type="text"
                      v-model="name"
                      required
                      placeholder="name">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-select v-model="role" :options="roles" class="mb-3">
        </b-form-select>
      </b-form-group> 
      <b-form-group>
          <b-form-select v-model="department" :options="departments" class="mb-3">
          </b-form-select>
      </b-form-group> 
      <b-form-group>
        <b-form-input 
                      type="text"
                      v-model="salary"
                      required
                      placeholder="salary">
        </b-form-input>
      </b-form-group>   
      <b-button  v-on:click="createEmployee()" variant="primary">Create</b-button>
      <!-- <b-button v-on:click="onReset()" variant="danger">Limpiar búsqueda</b-button> -->
    </b-form>

 </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
  return {
   employees: [],
   name: null,
   role: null,
   department: null,
   salary: null,
   showTable: true,
   roles: [
        { value: null, text: 'Please select the role' },
        { value: 'Waiter', text: 'Waiter' },
        { value: 'Chef', text: 'Chef' },
        { value: 'Office Assistant', text: 'Office Assistant' },
        { value: 'Senior Manager Marketing', text: 'Senior Manager Marketing' },
        { value: 'Accountant', text: 'Accountant' },

    ],
   departments: [
        { value: null, text: 'Please select the department' },
        { value: 'Restaurant service', text: 'Restaurant service' },
        { value: 'Housekeeping Department', text: 'Housekeeping Department' },
        { value: 'Front Office Department', text: 'Front Office Department' },
        { value: 'Sales and marketing', text: 'Sales and marketing' },
        { value: 'Account and finance', text: 'Account and finance' },

    ]
  }
 },
 created() {
  axios.get('http://localhost:3000/api/v1/employees/') 
  .then(response => {
   this.employees = response.data
   
   console.log(response.data)
  })
 .catch(e => {
     console.log(e)
  })
 },
 methods: {
   showFormEmployee() {
     this.showTable = false
   },
   showTableEmployee() {
     this.showTable = true
   },
   createEmployee() {
     console.log(this.name)
     console.log(this.role)
     console.log(this.department)

   },
   fire() {
     axios.delete('http://localhost:3000/api/v1/employees/7', {

   })
   },
    update() {
     axios.put('http://localhost:3000/api/v1/employees/7', {
      employee: {name: "CR7", role: "footballer", departament: "sports", salary: 9999999}
      })
   },
   
 }
}
</script>