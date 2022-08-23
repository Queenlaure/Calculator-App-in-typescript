import React from "react";


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
