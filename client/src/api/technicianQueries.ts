import axios from "axios";
import { hostname } from "./server";

const getAssignedIssues = async () => {
    const authToken = sessionStorage.getItem('authToken');
    const res = await axios.get(`${hostname}/api/issue/technicianIssues`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
        }
    });
    console.log(res.data);
    return res.data.issues;
}

export { getAssignedIssues };