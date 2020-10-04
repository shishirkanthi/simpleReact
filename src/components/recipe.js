import React, {useState} from "react";
import IngredientsList from "./ingredients";
import Instructions from "./instructions";
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';


export default function Recipe({key, index, name, ingredients, steps, expanded, onSelect}){
    return (
        <section id={name}>
            <h1>{index}. {name} <span onClick={onSelect}>{expanded?<ExpandLess/>:<ExpandMore/>}</span></h1>
            <IngredientsList list={ingredients}/>
            <Instructions title="Cooking Instructions" steps={steps}/>
        </section>
    );
}