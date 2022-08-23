import React from "react";


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
