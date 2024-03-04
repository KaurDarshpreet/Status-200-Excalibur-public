import { Router } from "express";
import { createIssue } from "../controllers/Student";
import { assignHostelIssue, reviewHostelIssue } from "../controllers/HostelAdmin";
import { assignCollegeIssue, reviewCollegeIssue } from "../controllers/CollegeAdmin";
import { resolveIssue } from "../controllers/Technician";

const IssueRoutes:Router = Router();

IssueRoutes.post('/create',createIssue);
IssueRoutes.post('/hostel/assign',assignHostelIssue);
IssueRoutes.post('/college/assign',assignCollegeIssue);
IssueRoutes.post('/resolve',resolveIssue);
IssueRoutes.get('/hostel/review',reviewHostelIssue);
IssueRoutes.get('/college/review',reviewCollegeIssue);

export default IssueRoutes;