import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';

import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailStyle.css';

const ItemDetail = ({ stk }) => {

    const {sticker, stock, nombre, precio, categoria, descripcion, ejemplo} = stk;

    const [itemStock, setItemStock] = useState(stock);

    const onBuy = (qtyBuy) => {
        if(qtyBuy <= itemStock){
            let newStock = itemStock - qtyBuy;
            setItemStock(newStock);
        } else{
            console.log("Ocurrió un error!");
        }
    };

    return (
        <div className="col-12 row justify-content-evenly align-items-center">
            <div className="col-3">
                <img src={sticker} className="img-fluid" alt={nombre} />
            </div>
            
            <div className="col-6 row justify-content-start">
                <div className="col-4 ms-auto">
                    <img src={ejemplo} className="img-fluid" alt="Ejemplo de uso" />
                </div>

                <div className="col-12">
                    <h4>{nombre}</h4>
                    <h5>${precio}</h5>
                    <h6>Categoria: {categoria}</h6>
                    <p>{descripcion}</p>
                </div>
            </div>

            <div className="col-4 row justify-content-center align-items-center">
                <div className="buy col-12">
                    <ItemCount onBuy={onBuy} initial={1} stock={itemStock} />
                </div>

                <div className="goHome col-6">
                    <Link to="/" className="text-decoration-none">
                        <AiOutlineRollback/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail
