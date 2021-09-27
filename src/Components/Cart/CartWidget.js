import { IoMdCart } from 'react-icons/io';

const CartWidget = () => {
    return (
        <>
            <button id="cart" className="nav__item btn col-1 my-2 p-1">
                <IoMdCart />
            </button>
        </>
    );
};

export default CartWidget;