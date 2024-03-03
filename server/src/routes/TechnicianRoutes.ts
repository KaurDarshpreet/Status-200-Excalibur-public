import { Router } from "express";
import { signup , login } from "../controllers/Technician";

const TechnicianRoutes:Router = Router();
TechnicianRoutes.post('/signup', signup);
TechnicianRoutes.post('/login', login);

export default TechnicianRoutes;