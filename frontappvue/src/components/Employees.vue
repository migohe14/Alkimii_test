<template>
 <div>
   <div class="row">
    <div class="col mb-3">
      <b-form>
          <b-form-group>
              <b-form-select v-model="department" :options="departments" class="mb-3">
              </b-form-select>
          </b-form-group> 
      </b-form>
  </div>
   <div class="col mb-3">
        <router-link :to="{name:'CreateEmployee'}">
          <button class="btn btn-primary">Create employee</button>
        </router-link>
   </div>
 
  </div>
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Department</th>
        <th scope="col">Salary</th>
      </tr>
    </thead>
    <tbody v-for="employee in employees" :key="employee.id">
      <tr v-if="employee.departament == department || department == null">
        <td>{{ employee.name }}</td>
        <td>{{ employee.role }}</td>
        <td>{{ employee.departament }}</td>
        <td>{{ employee.salary }}</td>
      </tr>

    </tbody>
  </table>
  

 </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
  return {
   employees: [],
   department: null,
   departments: [
                { value: null, text: 'All departments' },
                { value: 'Restaurant service', text: 'Restaurant service' },
                { value: 'Housekeeping Department', text: 'Housekeeping Department' },
                { value: 'Front Office Department', text: 'Front Office Department' },
                { value: 'Sales and marketing', text: 'Sales and marketing' },
                { value: 'Account and finance', text: 'Account and finance' },

            ],
  }
 },
 created() {
  axios.get('http://localhost:3000/api/v1/employees/') 
  .then(response => {
   this.employees = response.data
   })
 .catch(e => {
     console.log(e)
  })
 },
 methods: {
   deleteEmployee() {
     axios.delete('http://localhost:3000/api/v1/employees/7', {

   })
   },
    updateEmployee() {
        axios.put('http://localhost:3000/api/v1/employees/', {
          name: this.name,
          role: this.role, 
          departament: this.department, 
          salary: parseInt(this.salary)})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
   },
   
 }
}
</script>