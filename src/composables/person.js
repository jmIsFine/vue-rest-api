import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function usePerson() {
    const persons = ref([]);
    const person = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getPersons = async () => {
        const response = await axios.get("person");
        persons.value = response.data.data;
    };

    const getPerson = async (id) => {
        const response = await axios.get("person/" + id);
        person.value = response.data.data;
    };
    
    const storePerson = async (data) => {
        try {
            await axios.post("person", data);
            await router.push({name: "PersonIndex"});
        }
        catch(error) { 
            errors.value = error.response.data.errors; 
        }
    };
    
    const updatePerson = async (id) => {
        try {
            await axios.put("person/" + id, person.value);
            await router.push({name: "PersonIndex"});
        }
        catch(error){
            errors.value = error.response.data.errors;
        }
    };

    const destroyPerson = async (id) => {
        try {
            if (!window.confirm("Are you sure?")) return;
            await axios.delete("person/" + id);
            await getPersons();
        }
        catch(error) { 
            errors.value = error.response.data.errors; 
        }
    };

    return {
        person,
        persons,
        getPerson,
        getPersons,
        storePerson,
        updatePerson,
        destroyPerson,
        errors
    };
}   