<script setup>
    import usePerson from '../../composables/person';
    import { onMounted } from 'vue';

    const { persons, getPersons, destroyPerson } = usePerson();
    onMounted(() => getPersons());
</script>

<template>
    <div class="flex justify-end">
        <RouterLink :to="{name: 'PersonCreate'}" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5">New Person</RouterLink>
    </div>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>    
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons" :key="person.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">
                        {{person.Name}}
                    </td>
                    <td class="px-6 py-4">
                        {{person.Email}}
                    </td>
                    <td class="px-6 py-4">
                        {{person.Phone}}
                    </td>
                    <td class="flex px-6 py-4 space-x-1">
                        <RouterLink :to="{ name: 'PersonEdit', params: { id: person.id } }" class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Edit</RouterLink>
                        <button @click="destroyPerson(person.id)" class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>