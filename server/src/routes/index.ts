import { Router } from "express";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";
import TechnicianRoutes from "./TechnicianRoutes";
import LoginRoutes from "./LoginRoutes";
import SignupRoutes from "./SignupRoutes";
import IssueRoutes from "./IssueRoutes";


const RootRouter:Router = Router();

// public routes
RootRouter.use('/signup',SignupRoutes);
RootRouter.use('/login',LoginRoutes);

// protected routes
RootRouter.use('/student',StudentRoutes);

RootRouter.use('/admin',AdminRoutes);
RootRouter.use('/technician',TechnicianRoutes);

RootRouter.use('/issue',IssueRoutes);

export default RootRouter;
