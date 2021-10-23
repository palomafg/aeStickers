import { useEffect, useState } from 'react';
import { IoMdCart } from 'react-icons/io';

import { CartContextUse } from '../../Contexts/CartContext';

const CartWidget = () => {

    const { cart } = CartContextUse();
    const [cantCart, setCantCart] = useState(0);

    const actualizarTotalCarrito = () => {
        let total = 0;

        if(cart.length != 0){
            cart.map(e => {
                total += e.cantidad;
                setCantCart(total);
            });
        } else {
            setCantCart(0);
        }
    }

    useEffect(() => {
        actualizarTotalCarrito();
    }, [cart]);

    return (
            <button className="position-relative">
                <IoMdCart />
                <div className="position-absolute top-0 start-100 translate-middle">
                    {
                        cantCart ?
                        <span>{cantCart}</span>
                        :
                        <span></span>
                    }
                </div>
            </button>
    );
};

export default CartWidget;