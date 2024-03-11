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

export { getNotAssignedIssues };