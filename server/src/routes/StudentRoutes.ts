import { Router } from "express";
import { createIssue , signup , login, getAllIssues } from "../controllers/Student";

const StudentRoutes: Router = Router();
StudentRoutes.post('/signup', signup);
StudentRoutes.post('/login', login);
StudentRoutes.post('/createIssue', createIssue) ; // add a middleware of auth here 
StudentRoutes.get('/getIssues',getAllIssues); // add a middleware of auth here

export default StudentRoutes; 