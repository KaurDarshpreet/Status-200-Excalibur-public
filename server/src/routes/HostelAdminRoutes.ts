import { Router } from "express";
import { login, signup } from "../controllers/HostelAdmin";

const hostelAdminRoutes: Router = Router();

hostelAdminRoutes.post('/signup', signup);
hostelAdminRoutes.post('/login', login);

export default hostelAdminRoutes;