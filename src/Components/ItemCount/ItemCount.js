import { React, useState } from 'react';

const ItemCount = ({initial, stock}) => {

    const [qty,setQty] = useState(initial);

    const rmvItem = () => {
        if(qty > initial){
            setQty(qty - 1);
        }
    };

    const addItem = () => {
        if(qty < stock){
            setQty(qty + 1);
        }
    };

    const comprar = () => {
        alert(`Te llevas ${qty} items!`);
    };

    return (
        <>
            <div className="m-3 d-flex justify-content-center">
                <button className="m-2" onClick={() => rmvItem()}> - </button>
                <p className="m-2"> {qty} </p>
                <button className="m-2" onClick={() => addItem()}> + </button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={() => comprar()}>Comprar</button>
            </div>
        </>
    )
}

export default ItemCount
