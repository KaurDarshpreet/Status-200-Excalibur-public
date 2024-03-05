import { Router } from "express";
import { createIssue, getAllIssues } from "../controllers/Student";
import { assignHostelIssue, checkHostelIssue, reviewHostelIssue, technicianList } from "../controllers/HostelAdmin";
import { assignCollegeIssue, checkCollegeIssue, listTechnicians, reviewCollegeIssue } from "../controllers/CollegeAdmin";
import { Issuelist, resolveIssue } from "../controllers/Technician";
import authenticateToken from "../middlewares/jwtVerification";
import { collegeAdminAuth, hostelAdminAuth, studentAuth, technicianAuth } from "../middlewares/roleAuthentication";
import upload from "../utilities/multerInitialize";

const IssueRoutes: Router = Router();

//students routes
IssueRoutes.post('/create', upload.single("file"), authenticateToken, studentAuth, createIssue);
IssueRoutes.get('/yourIssues', authenticateToken, studentAuth, getAllIssues);


//technician routes
IssueRoutes.put('/resolve/:issue_id', authenticateToken, technicianAuth, resolveIssue);
IssueRoutes.get('/issueList', authenticateToken, technicianAuth, Issuelist);


//hostel admin routes
IssueRoutes.put('/hostel/assign', authenticateToken, hostelAdminAuth, assignHostelIssue);
IssueRoutes.put('/hostel/review', authenticateToken, hostelAdminAuth, reviewHostelIssue);
IssueRoutes.get('/hostel/checkIssues', authenticateToken, hostelAdminAuth, checkHostelIssue);
IssueRoutes.get('/hostel/checkIssues', authenticateToken, hostelAdminAuth, technicianList);


//college admin routes
IssueRoutes.put('/college/assign', authenticateToken, collegeAdminAuth, assignCollegeIssue);
IssueRoutes.put('/college/review', authenticateToken, hostelAdminAuth, reviewCollegeIssue);
IssueRoutes.get('/college/checkIssues', authenticateToken, collegeAdminAuth, checkCollegeIssue);
IssueRoutes.get('/college/checkIssues', authenticateToken, collegeAdminAuth, listTechnicians);

export default IssueRoutes;