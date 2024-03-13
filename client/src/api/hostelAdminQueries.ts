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

const getRebates = async () =>{
    const authToken = sessionStorage.getItem('authToken');
    const res = await axios.get(`${hostname}/api/admin/hostel/checkRebates`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    });
    console.log(res.data);
    return res.data.rebates;
}

const reviewIssues = async (issue_id : number)=>{
    const authToken = sessionStorage.getItem('authToken');
    const res = await axios.delete(`${hostname}/api/issue/hostel/review/${issue_id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    });
    console.log(res.data.issue);
}
export { getNotAssignedIssues, getTechnicians, assignTechnician, getRebates, reviewIssues };