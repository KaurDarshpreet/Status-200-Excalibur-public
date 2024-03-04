import { Request, Response, NextFunction } from "express";
import { prisma } from "../index";

function studentAuth(req: Request, res: Response, next: NextFunction) {
    if (req.body.role === 'student') {
        
        next();
    }
    else {
        return res.sendStatus(403);
    }
}

function hostelAdminAuth(req: Request, res: Response, next: NextFunction) {
    if (req.body.role === 'hostelAdmin') {
        // prisma query
        next();
    }
    else {
        return res.sendStatus(403);
    }
}

function collegeAdminAuth(req: Request, res: Response, next: NextFunction) {
    if (req.body.role === 'collegeAdmin') {
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