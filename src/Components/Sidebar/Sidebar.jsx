import React from "react"
import "./css/sidebar.css"
import Feature from "./Feature"
import "../../App.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Feature 
                name="Todo"
            />
            <Feature
                name="Edit-labels"
            />
            <Feature 
                name="Archive"
            />
            <Feature
                name="Bin"
            />
        </div>
    );
}
