import React from "react";

//Defining an interface that will take the structure of all the buttons which have signs
export interface Btn {
    operator: string;
    handleInput?: (digit: string) => void;
}

const ArithmeticButton = ({operator, handleInput}: Btn) => {

    return (
        <button onClick={() => { handleInput?.(operator)}}>{operator}</button>
    )
}

export default ArithmeticButton;
