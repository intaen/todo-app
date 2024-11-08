import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Login({onSwitchRegister}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setTimeout(() => {
            navigate('/');
        }, 0)
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