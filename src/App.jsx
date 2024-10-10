import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import './components/LoginSignup/styles.css'; 
import MainConnecter from './components/Student/MainConnecter';
import FacultyDashboard from './components/FacultyInterface/FacultyDashboard';
import Dashboard from './components/Admin/Dashboard';
// import AdminInterface from './components/Admin/AdminInterface';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <div>Home page</div>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "student/profile",
        element: <MainConnecter />
      },
      {
        path: "faculty/profile",
        element: <FacultyDashboard />
      },
      {
        path: "ajay",
        element: <Dashboard />
      }

    ]
  }
]);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
