<script setup>
const props = defineProps({
  Employees: {
    type: Object,
    required: false,
  }

});
</script>

<template>
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full table-fixed border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Email</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Phone</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Department</th>
        
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">

      <tr 
      class="hover:bg-blue-50"
      v-for="emp in props.Employees"
      >
        <td class="px-6 py-4 font-normal text-gray-900">
            <div class="font-medium text-gray-700">{{ emp.first_name }} {{ emp.last_name }}</div>
        </td>
        <td class="px-6 py-4">{{ emp.email }}</td>
        <td class="px-6 py-4">{{ emp.phone }}</td>
        <td class="px-6 py-4">{{ emp.role }}</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              {{ emp.department }}
            </span>
          </div>
        </td>
        
      </tr>
    
    </tbody>
  </table>
</div>
</template>