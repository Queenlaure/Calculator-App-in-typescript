import React from "react";


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
