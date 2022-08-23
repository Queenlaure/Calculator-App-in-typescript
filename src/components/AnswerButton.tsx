import React from "react";

//Defining an interface for the structure of the equal button
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
