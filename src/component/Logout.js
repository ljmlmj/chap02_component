import React from "react";

export default function LogOut({onLogout}) {
    return (
        <div>
            <h2>Logout</h2>
            <button onClick={onLogout}>Log Out</button>
        </div>
    )
}