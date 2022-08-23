import React from "react";

//Defining an interface for the structure of the bracket button
export interface Btn {
    bracket: string;
    action?: () => void;
}

const BracketButton = ({bracket, action}: Btn) => {

    return (
        <button onClick={() => { action?.()}}>{bracket}</button>
    )
}

export default BracketButton;
