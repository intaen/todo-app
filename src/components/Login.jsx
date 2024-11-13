import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

export default function Login({onSwitchRegister}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const {login} = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault();

        const result = await login(email, password);
        console.log("RESULT LOGIN", result)
        if (result.success) {
            navigate('/home');
        }  else {
            alert("Email/Password salah");
        }
    }

    return (
        <form className="auth_form" action="" onSubmit={handleLogin}>
            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth_input"
                required
                />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth_input"
                required/>
            <button type='submit' className="auth_button">Login</button>
            <div className="auth_switchText">
                Don't have an account? <span
                    className="auth_switchLink"
                    onClick={onSwitchRegister}>Register</span>
            </div>
        </form>
    );
}