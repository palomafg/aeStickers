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
            <div className="counter col-12 d-flex justify-content-center">
                <button className="counter__btn pb-1" onClick={() => rmvItem()}> - </button>
                <p className="counter__qty my-2 mx-4"> {qty} </p>
                <button className="counter__btn pb-1" onClick={() => addItem()}> + </button>
            </div>

            <div className="col-12 row justify-content-center">
                <button className="btn__cart" onClick={comprar}>
                    <MdAddShoppingCart/>
                </button>
            {
            endBuy ?
                <Link className="col-12 mt-3 d-flex justify-content-center text-decoration-none" to="/carrito">
                    <button className="ver__cart"> IR AL CARRITO </button>
                </Link>
                :
                <div></div>
            }
            </div>
        </>
    )
}

export default ItemCount