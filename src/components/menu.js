import React, {useState, useEffect } from "react";
import Recipe from "./recipe";

function Menu({recipes}){
    const [expandStates, setExpandStates] = useState(recipes.map((recipe,i)=>({index:i,expanded: false})));

    useEffect(() => {        
        setExpandStates(expandStates);
    }, setExpandStates);

    const toggleExpand = (i) => {
        console.log('toggle expand');
        expandStates[i].expanded = !expandStates[i].expanded
    }

    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} index={i} {...recipe} expanded={expandStates[i].expanded} onSelect={()=>toggleExpand(i)} />
                ))}
            </div>
        </article>
    );
}

export default Menu;