import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        setTimeout(() => {
            navigate('/login');
        }, 0)
    }

    return (
        <form className="header" onSubmit={handleLogout}>
            <button type='submit' className="logout-button">Logout</button>
        </form>
    );
}