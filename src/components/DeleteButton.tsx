import React from "react";

//Defining an interface for the structure of the delete button
export interface Btn {
    remove: string;
    handleDelete?: () => void;
}

const DeleteButton = ({remove, handleDelete}: Btn) => {

    return (
        <button onClick={() => { handleDelete?.()}} >{remove}</button>
    )
}

export default DeleteButton;
