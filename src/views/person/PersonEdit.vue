<script  setup>
    import usePerson from '../../composables/person';
    import { onMounted } from 'vue';

    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    });

    const { person, getPerson, updatePerson, errors } = usePerson();
    onMounted(() => getPerson(props.id));
</script>

<template>
    <div class="container pt-14">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updatePerson($route.params.id)">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" v-model="person.Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.Name">
                    <span class="text-sm text-red-400">{{ errors.Name[0] }}</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="email" v-model="person.Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.Email">
                    <span class="text-sm text-red-400">{{ errors.Email[0] }}</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="text" id="phone" v-model="person.Phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.Phone">
                    <span class="text-sm text-red-400">{{ errors.Phone[0] }}</span>
                </div>
            </div>
                <div class="flex mt-4 space-x-1">
                    <button type="submit" class="px-3 py-2 bg-green-500 hover:bg-green-700 text-white rounded">Update</button>
                    <RouterLink to="/" class="px-3 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded">Back</RouterLink>
                </div>
            
        </form>
   </div>
</template>