import axios from 'axios'

export const getEmployees = async ()=>{
    const response = await axios.get('http://localhost:8080/dashboard/employees');
    //console.log(response.data);
    return await response.data;
}

export const getInternees = async ()=>{
    const response = await axios.get('http://localhost:8080/dashboard/internees');
    //console.log(response.data);
    return await response.data;
}

export const getPresents = async ()=>{
    const response = await axios.get('http://localhost:8080/dashboard/presents');
    return await response.data;
}

export const addUser =async (user) => {
    const response = await axios.post('http://localhost:8080/user/add', user);
    console.log(response.data);
    return await response.data;

}

export const displayEmp = async ()=>{
    const response = await axios.get('http://localhost:8080/user/employees');
    return await response.data;
}