import { hostname } from "./server";
import axios from "axios";

async function signupStudent(data: any){
    const studentInfo = await axios.post(`${hostname}/api/signup/student`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
    console.log(studentInfo);
}

export {signupStudent};