import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default function HeaderLogout() {
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext)

    const handleLogout = async (e) => {
        e.preventDefault();

        await logout();

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