import React from "react";

//Defining an interface for the structure of the clear button
export interface Btn {
    clear: string;
    handleClear?: () => void;
}

const ClearScreenButton = ({clear, handleClear}: Btn) => {

    return (
        <button onClick={() => { handleClear?.()}}>{clear}</button>
    )
}

export default ClearScreenButton;
