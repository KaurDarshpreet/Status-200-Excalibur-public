import { Router } from "express";
import {getAllIssues } from "../controllers/Student";

const StudentRoutes: Router = Router();
StudentRoutes.get('/getIssues',getAllIssues); // add a middleware of auth here

export default StudentRoutes;  