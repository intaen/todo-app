import React, { useContext, useEffect, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);
    const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthContext)
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    }, [isAuthenticated])

    return (
        <div className="auth_container">
          {isLoginView ? (
            <Login onSwitchRegister={() => setIsLoginView(false)} />
          ) : (
            <Register onSwitchLogin={() => setIsLoginView(true)} />
          )}
        </div>
    );
}