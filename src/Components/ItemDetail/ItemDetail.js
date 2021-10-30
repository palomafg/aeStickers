import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

import ItemCount from '../ItemCount/ItemCount';
import { CartContextUse } from '../../Contexts/CartContext';
import './ItemDetailStyle.css';

const ItemDetail = ({ stk }) => {

    const {sticker, stock, nombre, precio, categoria, descripcion, ejemplo} = stk;
    const { addItem } = CartContextUse();

    const [itemStock, setItemStock] = useState(stock);

    const onBuy = (qtyBuy) => {
        
        if(qtyBuy <= itemStock){
            let newStock = itemStock - qtyBuy;
            setItemStock(newStock);
            addItem(stk, qtyBuy);

        } else{
            console.log("Ocurrió un error!");
        }
    };

    return (
        <div className="col-11 col-md-10">
            <div className="goHome col-12 my-4 row">
                <Link to="/" className="col-1 p-0 ms-auto text-decoration-none">
                    <CgClose/>
                </Link>
            </div>
            <div className="stkDetail col-12 pe-3 row justify-content-evenly align-items-center">

                <div className="stkDetail__img col-5 my-4 mx-2">
                    <img src={sticker} className="img-fluid" alt={nombre} />
                </div>
                
                <div className="stkDetail__info col-6 my-4 mx-2">
                    <h4 className="info__nombre my-3">{nombre}</h4>
                    <p className="info__desc my-4 ps-2">{descripcion}</p>
                    <h5 className="info__precio mt-5">${precio}</h5>
                </div>

                <div className="stkDetail__ej col-2 my-4 me-auto">
                    <img src={ejemplo} className="img-fluid" alt="Ejemplo de uso" />
                </div>

                <div className="stkDetail__buy col-4 me-5">
                    <ItemCount onBuy={onBuy} initial={1} stock={itemStock} />
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail
