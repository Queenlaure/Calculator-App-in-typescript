import React from "react";

//Defining an interface that will take the structure of all the buttons with digits
export interface Btn {
    digit: string;
    handleInput?: (digit: string) => void;
}

const Button = ({digit, handleInput}: Btn) => {

    return (
        <button onClick={() => { handleInput?.(digit)}}>{digit}</button>
    )
}

export default Button;
