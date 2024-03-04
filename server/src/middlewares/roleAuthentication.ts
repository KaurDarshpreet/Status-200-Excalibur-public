import { Request, Response, NextFunction } from "express";
import { prisma } from "../index";
import AuthenticatedRequest from "../interfaces/authenticatedRequest";

function studentAuth(req: Request, res: Response, next: NextFunction) {
    if ((req as AuthenticatedRequest).user.role === 'student') {
        next();
    }
    else {
        return res.sendStatus(403);
    }
}

function hostelAdminAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.body.role === 'hostel_admin') {
        // prisma query
        next();
    }
    else {
        return res.sendStatus(403);
    }
}

function collegeAdminAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.body.role === 'college_admin') {
        // prisma query
        next();
    }
    else {
        return res.sendStatus(403);
    }
}


function technicianAuth(req: Request, res: Response, next: NextFunction) {
    if (req.body.role === 'technician') {
        next();
    }
    else {
        return res.sendStatus(403);
    }
}

export { studentAuth, hostelAdminAuth, collegeAdminAuth, technicianAuth};