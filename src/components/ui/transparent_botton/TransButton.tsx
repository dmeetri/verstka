import "./TransButton.css"
import React from "react"

interface TransButton {
    text: String;
}

export const TransButton: React.FC<TransButton> = ({ text }) => {
    return(
        <button className="trans_btn flex">
            <p className="text-large">{text}</p>
        </button>
    );
}