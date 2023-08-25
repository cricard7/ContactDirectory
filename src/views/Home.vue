<script setup>
 import TheSearchForm from '@/components/TheSearchForm.vue'
 import TheEmployeeTable from '@/components/TheEmployeeTable.vue';

 import { onMounted, reactive } from 'vue'
 
 //initialize value of the department column for selection
 const employeeData = reactive({
    employeeData: {}, // to store all employee data table
    departments: [] //unique values of the department column
  
})

const tableToDisplay = reactive({
  filteredTableData: [] // employee data filtered according to TheSearchForm input
})
 
 onMounted(async() => {
    const response = await fetch("./MOCK_DATA.json");
    const Employees = await response.json();
    employeeData.employeeData = Employees
    
    //initialize UI with full list
    tableToDisplay.filteredTableData = employeeData.employeeData

    //populate departements for dropdown
    Employees.forEach(function(emp){
      if(!employeeData.departments.includes(emp.department)){
        employeeData.departments.push(emp.department)
      }
    })
    employeeData.departments.sort()
    
  
 })

 //search form input change. Update table. Filter by department then name
 const updateTable = (formData) => {
  
  /*
  formData{
    employeeName: '',
    department: ""
    }
  */


  let filteredUsersByDepartment

    if(formData.department === 'All'){
      filteredUsersByDepartment = employeeData.employeeData
    }
    else{
        filteredUsersByDepartment = employeeData.employeeData.filter((emp) => {
        return emp.department === formData.department
      })
    }

    //filter by user name

    let filteredUsersByName = filteredUsersByDepartment.filter((emp) => {
      let fullName = emp.first_name + ' ' + emp.last_name
    return fullName.toLowerCase().includes(formData.employeeName.toLowerCase())
})

tableToDisplay.filteredTableData = filteredUsersByName

}



</script>

<template>
  <div class="container mx-auto w-2/3">

    <div class="flex justify-left mt-5">
      <TheSearchForm
      v-if="employeeData.departments.length !== 0"
      :Departments = employeeData.departments
      @form-data-updated="updateTable"/>
    </div>
    <div class="flex justify-left">
      <TheEmployeeTable :Employees="tableToDisplay.filteredTableData"/>
    </div>
  </div>
    
     
      
      
     
      

  
  </template>
  

 