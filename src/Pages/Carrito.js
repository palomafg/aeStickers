import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContextUse } from '../Contexts/CartContext';

const Carrito = () => {

    const { clear, removeSticker, cart } = CartContextUse();
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [hayItems, setHayItems] = useState(false);

    const actualizarTotalPrecio = () => {
        let total = 0;
        cart.map(e => {
            total = total + (e.cantidad * e.sticker.precio);
            setTotalPrecio(total);
        });
    }

    const checkHayItems = () => {
        if(cart != 0){
            setHayItems(true);
        } else{
            setHayItems(false);
        }
    }

    useEffect(() => {
        actualizarTotalPrecio();
        checkHayItems();
    }, [cart]);

    return (
        <>
            {
            hayItems ?
                <div className="carrito col-12 row justify-content-center align-items-center">
                    <button className="col-10" onClick={clear}>Vaciar carrito</button>

                    {cart.map(e => {
                        const {sticker, nombre, precio, id} = e.sticker;
                        return(
                            <div key={id} className="item col-3">
                                <button onClick={() => removeSticker(id)} type="button" className="btn-close" aria-label="Remove"></button>
                                <img className="img-fluid" src={sticker} alt="sticker"/>
                                <h5>{nombre}</h5>
                                <h6>${precio}</h6>
                                <span>Llevás {e.cantidad}</span>
                            </div>
                        )
                    })}

                    <div className="col-12 text-end">
                        <h4>Total ${totalPrecio}</h4>
                    </div>
                </div>
                :
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <h4>No hay stickers agregados!</h4>
                        <Link to="/">
                            <button>Ir al catálogo</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default Carrito;
