<template>
    <div>
        <div class="mb-3">
            <router-link :to="{name:'Employees'}">
                 <button class="btn btn-secondary">Show employees</button>
            </router-link>
        </div>
            <b-form>
                <b-form-group>
                    <b-form-input 
                                type="text"
                                v-model="name"
                                required
                                placeholder="Name">
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
                                type="number"
                                v-model="salary"
                                required
                                placeholder="Salary">
                    </b-form-input>
                </b-form-group>   
                <b-button  v-on:click="createEmployee()" variant="primary">Create</b-button>
                <!-- <b-button v-on:click="onReset()" variant="danger">Limpiar búsqueda</b-button> -->
                </b-form>
                <div class=" mt-5" v-if="showAlert === true">
                    <b-alert show variant="success">
                    <h4 class="alert-heading">Employee created with success!</h4>
                    <p>
                        Now, you can see him in the employees table
                    </p>
                    </b-alert>
                </div>
                <div class=" mt-5" v-if="showIncompleted === true">
                    <b-alert show variant="danger">
                    <h4 class="alert-heading">Incompleted!</h4>
                    <p>
                        it's necessary to fill in all the data
                    </p>
                    </b-alert>
                </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: null,
            role: null,
            department: null,
            salary: null,
               roles: [
                { value: null, text: 'Please select the role' },
                { value: 'Waiter', text: 'Waiter' },
                { value: 'Chef', text: 'Chef' },
                { value: 'Cleaner', text: 'Cleaner' },
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

            ],
        showAlert: false,
        showIncompleted: false
        }
    },
    methods:{
        createEmployee() {
            if(this.name !== null && this.role !== null && this.department !== null && this.salary !== null) {
                axios.post('http://localhost:3000/api/v1/employees/', {
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
                this.showAlert = true
            } else {
                this.showIncompleted = true
            }
            this.name = null
            this.role = null
            this.departament = null
            this.salary = null                    
        },
    }
}
</script>
