<template>
<div>
    <div v-if="showConfirm == true">
        <p>Confirm?</p>
        <button v-on:click="deleteEmployee()" class="btn">Delete</button>
        <router-link :to="{ name: 'Employees'}">
             <button class="btn btn-primary">Back</button>
        </router-link>
    </div>
    
            <div class=" mt-5" v-if="showConfirm == false">
                    <b-alert show variant="success">
                    <h4 class="alert-heading">Employee deleted with success!</h4>
                    <p>
                        Now, you can see the employees table
                    </p>
                    </b-alert>
            </div>
        <router-link :to="{ name: 'Employees'}">
             <button v-if="showConfirm == false" class="btn btn-primary">Back</button>
        </router-link>

</div>
</template>
<script>
import axios from 'axios'

export default {
    props: ['id'],
    data() {
        return {
            showConfirm: true
        }
    },
  
    methods:{
        deleteEmployee() {
            axios.delete('http://localhost:3000/api/v1/employees/' + this.$props.id, {

        })
        .then(function (response) {
                //update the employees table (better use socket.io)
        
                })
            .catch(function (error) {
                    console.log(error);
                });
        this.showConfirm = false
   },
    }
    
}
</script>
