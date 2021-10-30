import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import './ItemCountStyle.css'

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
            <div className="counter my-3 d-flex justify-content-center">
                <button className="counter__btn" onClick={() => rmvItem()}> - </button>
                <p className="counter__qty my-2 mx-4"> {qty} </p>
                <button className="counter__btn" onClick={() => addItem()}> + </button>
            </div>

            {
            endBuy ?
                <div className="row justify-content-center">
                    <button className="btn__cart" onClick={comprar}>
                        <MdAddShoppingCart/> 
                    </button>

                    <Link className="my-4 text-decoration-none" to="/carrito">
                        <button className="ver__cart"> IR AL CARRITO </button>
                    </Link>
                </div>
                :
                <div className="d-flex justify-content-center">
                    <button className="btn__cart" onClick={comprar}>
                        <MdAddShoppingCart/>
                    </button>
                </div>
            }
        </>
    )
}

export default ItemCount