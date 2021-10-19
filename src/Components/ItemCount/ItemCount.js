import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdAddShoppingCart } from 'react-icons/md';

const ItemCount = ({onBuy, initial, stock}) => {

    const [qty,setQty] = useState(initial);
    const [endBuy, setEndBuy] = useState(false);

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
        if(qty <= stock){
            // alert(`Te llevas ${qty} items!`);
            onBuy(qty);
            setQty(initial);
            setEndBuy(true);

        } else{
            alert("Lo sentimos, ya no quedan más :(");
        }
        
    };

    return (
        <>
            <div className="m-3 d-flex justify-content-center">
                <button className="m-2" onClick={() => rmvItem()}> - </button>
                <p className="m-2"> {qty} </p>
                <button className="m-2" onClick={() => addItem()}> + </button>
            </div>

            {
            endBuy ?
                <div className="d-flex justify-content-evenly">
                    <button onClick={comprar}> <MdAddShoppingCart/> </button>
                    <Link to="/carrito" className="text-decoration-none">
                        <button> Finalizar compra </button>
                    </Link>
                </div>
                :
                <div className="d-flex justify-content-center">
                    <button onClick={comprar}> <MdAddShoppingCart/> </button>
                </div>
            }
        </>
    )
}

export default ItemCount