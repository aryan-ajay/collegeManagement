import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

    }, []);


    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8090/api/auth/signin", {
                email,
                password
            });
            console.log(response.data);
            if (response && response.data) {
                // Extract JWT from the Authorization header
                const headerJwt = response.headers["authorization"];
                if (headerJwt) {
                    const realJwt = headerJwt.split(" ")[1]; // Get the token part after 'Bearer'

                    // Store the token in localStorage
                    localStorage.setItem("token", realJwt);

                    // Navigate to profile page after successful login
                    navigate("/student/profile");
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
