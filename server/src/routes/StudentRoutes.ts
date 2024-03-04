import { Router } from "express";
import { getAllIssues } from "../controllers/Student";
import authenticateToken from "../middlewares/jwtVerification";
import { studentAuth } from "../middlewares/roleAuthentication";

const StudentRoutes: Router = Router();

StudentRoutes.get("/issues", authenticateToken, studentAuth, getAllIssues);

export default StudentRoutes;