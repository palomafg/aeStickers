import React from 'react';
import { useEffect, useState } from 'react';

import { CartContextUse } from '../Contexts/CartContext';
import NoItems from '../Components/NoItems/NoItems';
import BuyForm from '../Components/BuyForm/BuyForm';
import BuyComplete from '../Components/BuyComplete/BuyComplete';

const Carrito = () => {

    const { clear, removeSticker, cart } = CartContextUse();
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [hayItems, setHayItems] = useState(false);
    const [buying, setBuying] = useState(true);
    const [ordenId, setOrdenId] = useState('');

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
            buying?

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

                        <BuyForm total={totalPrecio} setBuying={setBuying} setOrdenId={setOrdenId}/>
                    </div>

                    :

                    <NoItems/>

                :

                <BuyComplete ordenId={ordenId}/>
                   
            }
        </>
    );
};

export default Carrito;
