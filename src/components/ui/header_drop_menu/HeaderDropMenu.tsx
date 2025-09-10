import "./HeaderDropMenu.css"
import React, { useState } from "react";

interface HeaderDropMenu {
    text: String;
}

export const HeaderDropMenu: React.FC<HeaderDropMenu> = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="header-drop-menu flex">
            <button onClick={toggleDropDown}>{text}</button>
            <img 
                src="" 
                alt=""
            />
        </div>
    );
}