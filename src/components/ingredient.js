import React from "react";

function ingredient({name, amount, measurement}){
    return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{measurement}</td>
        </tr> 
    );
}

export default ingredient;