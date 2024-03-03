import { Router } from "express";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";
import TechnicianRoutes from "./TechnicianRoutes";
import { rootCertificates } from "tls";

export const RootRouter:Router = Router();

RootRouter.use('/student',StudentRoutes);
RootRouter.use('/admin',AdminRoutes);
RootRouter.use('/technician',TechnicianRoutes);