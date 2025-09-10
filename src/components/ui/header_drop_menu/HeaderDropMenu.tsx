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
            <button onClick={toggleDropDown}>
                {text}

                <img 
                    className="header-drop-icon"
                    src="/icons/drop_arrow.svg"
                    alt="drop menu main"
                />
            </button>

            {isOpen && (
                <ul>
                    <li><a href="#">Staking</a></li>
                    <li><a href="#">Advantages</a></li>
                    <li><a href="#">Roadmap</a></li>
                    <li><a href="#">Tokenomics</a></li>
                    <li><a href="#">Start</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            )}
        </div>
    );
}