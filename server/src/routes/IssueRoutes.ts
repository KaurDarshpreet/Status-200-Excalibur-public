import { Router } from "express";
import { createIssue, getAllIssues } from "../controllers/Student";
import { assignHostelIssue, reviewHostelIssue } from "../controllers/HostelAdmin";
import { assignCollegeIssue, reviewCollegeIssue } from "../controllers/CollegeAdmin";
import { Issuelist, resolveIssue } from "../controllers/Technician";
import authenticateToken from "../middlewares/jwtVerification";
import { collegeAdminAuth, hostelAdminAuth, studentAuth, technicianAuth } from "../middlewares/roleAuthentication";

const IssueRoutes:Router = Router();

//students routes
IssueRoutes.post('/create', authenticateToken, studentAuth,createIssue);
IssueRoutes.get('/getIssues', authenticateToken, studentAuth, getAllIssues);


//technician routes
IssueRoutes.post('/resolve/:issue_id', authenticateToken, technicianAuth , resolveIssue);
IssueRoutes.get('/issueList', authenticateToken, technicianAuth , Issuelist);


//hostel admin routes
// IssueRoutes.post('/hostel/assign', authenticateToken, hostelAdminAuth , assignHostelIssue);
// IssueRoutes.get('/hostel/review', authenticateToken, hostelAdminAuth , reviewHostelIssue);


//college admin routes
// IssueRoutes.post('/college/assign', authenticateToken, collegeAdminAuth , assignCollegeIssue);
// IssueRoutes.get('/college/review', authenticateToken, hostelAdminAuth , reviewCollegeIssue);

export default IssueRoutes;