<script setup>
import { onMounted, reactive, watch, defineEmits } from 'vue'

const emit = defineEmits(['form-data-updated'])

const props = defineProps({
  Departments: { //array of Departements from Employee data
    type: Object,
  }
});

const formData = reactive({
    employeeName: '',
    department: "All" //defaults to 'All' when form initially loads
    
})

//https://vuejs.org/guide/essentials/watchers.html

watch(formData, (newValue, oldValue) => {
     //update date format
    emit('form-data-updated', formData)
})

</script>

<template>
    <div class="card w-full bg-gray-50 shadow-xl m-5">
    <div class="card-body">
      <h2 class="card-title">Employee Directory</h2>
      <div class="grid gap-4 grid-cols-2">
        <FormKit
        type="text"
        name="EmployeeName"
        id="EmployeeName"
        label="Employee Name"
        help="First And/Or Last Name"
        v-model="formData.employeeName"
       
      />
      <!--
      <FormKit
        type="tel"
        name="PhoneNumber"
        id="PhoneNumber"
        label="Phone number"
        placeholder="xxx-xxx-xxxx"
         validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{
        matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }"
      />
        -->

      <FormKit
        type="select"
        label="Department"
        name="Department"
        :options="['All'].concat(Departments)"
        v-model="formData.department"
        />
      </div>
      
      <!--
      {{ formData.employeeName }}
      {{ formData.department }}
    -->
      
      <!--
        <FormKit
        type="text"
        name="physician"
        id="physician"
        label="Physician"
        help="MD First and Last Only"
        input-class="$reset w-full h-10 px-3 text-base text-amber-600 placeholder-gray-400"
        
      />
      -->
      
    </div>
  </div>
</template>



