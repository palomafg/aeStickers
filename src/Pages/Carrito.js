import React from 'react';
import { useEffect, useState } from 'react';

import { CartContextUse } from '../Contexts/CartContext';
import NoItems from '../Components/NoItems/NoItems';
import BuyForm from '../Components/BuyForm/BuyForm';
import BuyComplete from '../Components/BuyComplete/BuyComplete';
import CarritoCierre from '../Components/CarritoCierre/CarritoCierre';

const Carrito = () => {

    const [ordenId, setOrdenId] = useState('');

    const { cart } = CartContextUse();
    const [totalPrecio, setTotalPrecio] = useState(0);

    const [hayItems, setHayItems] = useState(false);
    const [buying, setBuying] = useState(true);

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
                    <div className="col-12 row p-1 justify-content-center align-items-center">
                        
                        <CarritoCierre/>

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
