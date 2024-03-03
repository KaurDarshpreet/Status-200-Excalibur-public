import { Router } from "express";
import { login, signup } from "../controllers/CollegeAdmin";

const collegeAdminRoutes: Router = Router();

collegeAdminRoutes.post('/signup', signup);
collegeAdminRoutes.post('/login', login);

export default collegeAdminRoutes;