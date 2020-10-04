import React from "react";

function instructions({title, steps}){
    return (
        <section className="Instructions">
            <h2>{title}</h2>
            {steps.map((step, i)=>(
                <li key={i}>{step}</li>
            ))}
        </section>
    );
}

export default instructions;