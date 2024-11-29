import React from "react";

const ItemListContainer = (props) => {
    return (
        <main className="h-[90vh]">
            <h2 className="text-gray-300 text-center font-bold text-6xl py-[2em]">{props.text}</h2>
        </main>
    )
};

export default ItemListContainer;
