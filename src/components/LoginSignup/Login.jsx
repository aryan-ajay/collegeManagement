import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in (i.e., token exists in localStorage)
        const token = localStorage.getItem("token");

        if (token) {

            // Get roles from localStorage or saved state
            const roles = JSON.parse(localStorage.getItem("roles"));

            // Redirect based on roles
            if (roles.includes("ADMIN")) {
                navigate("/admin/dashboard");
            } else if (roles.includes("FACULTY_MEMBER")) {
                navigate("/faculty/profile");
            } else if (roles.includes("STUDENT")) {
                navigate("/student/profile");
            }
        }
    }, [navigate]);


    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8090/api/auth/signin", {
                email,
                password
            });
            console.log(response.data);
            const headerJwt = response.headers["authorization"];
            if (headerJwt) {
                const realJwt = headerJwt.split(" ")[1];

                // Store the token in localStorage
                localStorage.setItem("token", realJwt);

                // Store roles in localStorage for future use
                const roles = response.data.roles;
                localStorage.setItem("roles", JSON.stringify(roles));

                // Extract roles from response.data
                if (roles && roles.length > 0) {
                    if (roles.includes("ADMIN")) {
                        navigate("/admin/dashboard");
                    } else if (roles.includes("FACULTY_MEMBER")) {
                        navigate("/faculty/profile");
                    } else if (roles.includes("STUDENT")) {
                        navigate("/student/profile");
                    } else {
                        navigate("/");
                    }
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Faculty Member">Faculty Member</option>
                    <option value="Administrator">Administrator</option>
                </select>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>Log in to your existing account</p>
        </div>
    );
};

export default Login;
