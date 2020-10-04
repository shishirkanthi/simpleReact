import React from "react";
import Ingredient from "./ingredient";

export default function ingredientsList({list}){
    return (
        <table className="ingredients">
            <tr>
                <th>Ingrediant</th>
                <th>Amount</th>
                <th>Measurement</th>
            </tr>            
            {list.map((ingredient, i)=>(
                <Ingredient key={i} {...ingredient}/>
            ))}
        </table>
    );
}