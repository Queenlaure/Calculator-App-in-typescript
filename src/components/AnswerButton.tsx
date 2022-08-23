import React from "react";


export interface Btn {
    equal: string;
    handleCalculation?: () => void;
}

const AnswerButton = ({equal, handleCalculation}: Btn) => {

    return (
        <button onClick={() => { handleCalculation?.()}}>{equal}</button>
    )
}

export default AnswerButton;
