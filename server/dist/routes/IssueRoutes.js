"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Student_1 = require("../controllers/Student");
const HostelAdmin_1 = require("../controllers/HostelAdmin");
const CollegeAdmin_1 = require("../controllers/CollegeAdmin");
const Technician_1 = require("../controllers/Technician");
const jwtVerification_1 = __importDefault(require("../middlewares/jwtVerification"));
const roleAuthentication_1 = require("../middlewares/roleAuthentication");
const multerInitialize_1 = __importDefault(require("../utilities/multerInitialize"));
const IssueRoutes = (0, express_1.Router)();
//students routes
IssueRoutes.post('/create', multerInitialize_1.default.single("file"), jwtVerification_1.default, roleAuthentication_1.studentAuth, Student_1.createIssue);
IssueRoutes.get('/yourIssues', jwtVerification_1.default, roleAuthentication_1.studentAuth, Student_1.getAllIssues);
//technician routes
IssueRoutes.put('/resolve/:issue_id', jwtVerification_1.default, roleAuthentication_1.technicianAuth, Technician_1.resolveIssue);
IssueRoutes.get('/issueList', jwtVerification_1.default, roleAuthentication_1.technicianAuth, Technician_1.Issuelist);
//hostel admin routes
IssueRoutes.put('/hostel/assign', jwtVerification_1.default, roleAuthentication_1.hostelAdminAuth, HostelAdmin_1.assignHostelIssue);
IssueRoutes.put('/hostel/review', jwtVerification_1.default, roleAuthentication_1.hostelAdminAuth, HostelAdmin_1.reviewHostelIssue);
IssueRoutes.get('/hostel/checkIssues', jwtVerification_1.default, roleAuthentication_1.hostelAdminAuth, HostelAdmin_1.checkHostelIssue);
IssueRoutes.get('/hostel/checkIssues', jwtVerification_1.default, roleAuthentication_1.hostelAdminAuth, HostelAdmin_1.technicianList);
//college admin routes
IssueRoutes.put('/college/assign', jwtVerification_1.default, roleAuthentication_1.collegeAdminAuth, CollegeAdmin_1.assignCollegeIssue);
IssueRoutes.put('/college/review', jwtVerification_1.default, roleAuthentication_1.hostelAdminAuth, CollegeAdmin_1.reviewCollegeIssue);
IssueRoutes.get('/college/checkIssues', jwtVerification_1.default, roleAuthentication_1.collegeAdminAuth, CollegeAdmin_1.checkCollegeIssue);
IssueRoutes.get('/college/checkIssues', jwtVerification_1.default, roleAuthentication_1.collegeAdminAuth, CollegeAdmin_1.listTechnicians);
exports.default = IssueRoutes;
