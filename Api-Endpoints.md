# Signup routes return User information
/api/signup/student POST
/api/signup/technician POST
/api/signup/admin/hostel POST
/api/signup/admin/college POST

# Login routes return JWT as cookie and User information
/api/login/student POST
/api/login/student/v1/google POST
/api/login/technician POST
/api/login/admin/hostel POST
/api/login/admin/college POST

# Student functionality
/api/issue/create POST
/api/issue/studentIssues GET

# Technician functionality
/api/issue/technicianIssues GET
/api/issue/resolve/:issue_id PUT

# Hostel Admin functionality
/api/issue/hostel/assign PUT
/api/issue/hostel/review DELETE
/api/issue/hostel/checkIssues GET

# College Admin functionality
/api/college/assign PUT
/api/college/review DELETE
/api/college/checkIssues GET

# College Admin or Hostel Admin functionality
/api/issue/listTechnicians GET