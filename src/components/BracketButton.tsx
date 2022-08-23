import React from "react";


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
