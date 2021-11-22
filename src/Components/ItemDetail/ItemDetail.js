import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

import ItemCount from '../ItemCount/ItemCount';
import { CartContextUse } from '../../Contexts/CartContext';
import { DarkContextUse } from '../../Contexts/DarkContext';
import './ItemDetailStyle.css';

const ItemDetail = ({ stk }) => {

    const {sticker, stock, nombre, precio, categoria, descripcion, ejemplo} = stk;
    const { addItem } = CartContextUse();

    const { dark } = DarkContextUse();

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
        <div className="detalle col-11 col-md-10 col-xl-8 col-xxl-6 row p-0 py-xxl-5">
            <div className={`${dark? 'dark' : 'light'} goHome col-12 mb-3 p-0 row`}>
                <Link to="/aeStickers/" className="col-1 p-0 ms-auto text-decoration-none">
                    <CgClose/>
                </Link>
            </div>
            <div className="stkDetail col-12 row p-0 justify-content-evenly align-items-center">

                <div className="stkDetail__img col-8 mb-2 mx-2">
                    <img src={sticker} className="img-fluid" alt="sticker" />
                </div>
                
                <div className="stkDetail__info col-11 mt-1">
                    <h4 className={`${dark? 'dark' : 'light'} info__nombre my-1`}>
                        {nombre}
                    </h4>
                    <p className={`${dark? 'dark' : 'light'} info__desc my-3 ps-2`}>
                        {descripcion}
                    </p>
                    <h5 className={`${dark? 'dark' : 'light'} info__precio mt-3`}>
                        ${precio}
                    </h5>
                </div>

                <div className="stkDetail__buy col-8 row justify-content-center">
                    <ItemCount onBuy={onBuy} initial={1} stock={itemStock} />
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail
