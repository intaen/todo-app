import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setTimeout(() => {
            navigate('/login');
        }, 0)
    }

    return (
        <form className="header" onSubmit={handleLogin}>
            <button type='submit' className="login-button">Login</button>
        </form>
    );
}