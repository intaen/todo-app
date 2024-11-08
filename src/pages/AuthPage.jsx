import React, { useState } from "react";
import { useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import TodoPage from "./TodoPage";

export default function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);

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