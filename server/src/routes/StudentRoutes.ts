import { Router } from "express";
import authenticateToken from "../middlewares/jwtVerification";
import { studentAuth } from "../middlewares/roleAuthentication";

const StudentRoutes: Router = Router();

export default StudentRoutes;  