# Student, Faculty, and Administrator Management System - Frontend

This is the frontend interface for a comprehensive management system designed for students, faculty members, and administrators. Built with React, it provides role-based user access, allowing students to manage profiles, faculty members to oversee class lists, and administrators to handle system records and analytics.

## Key Features

- **Role-Based Login**: A secure login system with options for Student, Faculty, and Administrator roles.
- **Student Dashboard**: Access personal profiles, view academic details (courses, grades, attendance), search for other students, and contact faculty advisors.
- **Faculty Dashboard**: Manage student class lists and update faculty profiles.
- **Admin Dashboard**: Handle CRUD operations for students and faculty records, and view data analytics through graphical dashboards.

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript, Axios (for API integration)
- **State Management**: React Context API / Redux (for managing state and authentication)

The frontend will run on `http://localhost:5173`. Ensure that the backend is running to interact with the system.

## Usage

- After launching the application, the user can log in by selecting a role (Student, Faculty Member, or Administrator).
- Upon successful login, the user is redirected to their respective dashboard:
  - **Students** can view and update their profiles, search for peers, and contact faculty advisors.
  - **Faculty Members** can manage class lists and update their contact details.
  - **Administrators** have the ability to manage student and faculty records and view system analytics.

