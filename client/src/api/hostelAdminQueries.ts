import axios from "axios";
import { hostname } from "./server";

const getNotAssignedIssues = async ()=>{
    const authToken = sessionStorage.getItem('authToken');
    const res = await axios.get(`${hostname}/api/issue/hostel/checkIssues`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    });
    console.log(res.data);
    return res.data;
}

const getTechnicians = async () =>{
    const authToken = sessionStorage.getItem('authToken');
    const res = await axios.get(`${hostname}/api/issue/listTechnicians`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    });
    console.log(res.data);
    return res.data;
}

const assignTechnician = async (data: any)=>{
    const authToken = sessionStorage.getItem('authToken');
    const res = await axios.put(`${hostname}/api/issue/hostel/assign`, data, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    });
    return res.data;
}

export { getNotAssignedIssues, getTechnicians, assignTechnician };