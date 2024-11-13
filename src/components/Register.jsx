import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register({onSwitchLogin}) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        setTimeout(() => {
            navigate('/login');
        }, 0)
    }

    return (
        <form className="auth_form" action="" onSubmit={handleRegister}>
            <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth_input"
                required
            />
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
            <input
                placeholder="Confirm Password"
                type="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="auth_input"
                required/>
            <button type='submit' className="auth_button">Register</button>
            <div className="auth_switchText">
                Already have an account? <span
                    className="auth_switchLink"
                    onClick={onSwitchLogin}>Login</span>
            </div>
        </form>
    );
}