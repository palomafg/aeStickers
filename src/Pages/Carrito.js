import React from 'react';

import { CartContextUse } from '../Contexts/CartContext';

const Carrito = () => {

    const { clear, removeSticker, cart } = CartContextUse();

    return (
        <div className="carrito col-12 row">
            <button className="col-10" onClick={clear} >Vaciar carrito</button>
            {cart.map(e => {
                const {sticker, nombre, precio, id} = e.sticker;
                return(
                    <div key={id} className="item col-3">
                        <button onClick={() => removeSticker(id)} type="button" className="btn-close" aria-label="Remove"></button>
                        <img className="img-fluid" src={sticker} alt="sticker"/>
                        <h5>{nombre}</h5>
                        <h6>{precio}</h6>
                        <span>{e.cantidad}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Carrito
