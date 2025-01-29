import { useState } from "react";
import gsap from 'gsap';
import { Link } from "react-router-dom";

export const ButtonList = ({buttons}) => {
   
    return (
        <div className="buttonHolder">
        {buttons.map((button) => (
     
            <Link to={`/buttons/${button.id}`} className="buttonPreview" key={button.id} style={{
                backgroundColor: button.color,
            }}
            >
                <h2>{button.title}</h2>
                <p>{button.content}</p>
                <p>{button.color}</p>
            </Link>
        ))}
    </div>
    )
};