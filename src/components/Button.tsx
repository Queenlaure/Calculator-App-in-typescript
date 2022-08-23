import React from "react";


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
