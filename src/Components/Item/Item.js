import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';

import './ItemStyle.css';

const Item = ({ id, sticker, nombre, precio }) => {

    return (
        <div className="sticker col-5 col-lg-3  mx-sm-3 mx-xl-4 my-sm-4 p-sm-3 row justify-content-center">
            <img src={sticker} alt="sticker" className="col-12 sticker__img img-fluid p-2 my-1"/>
            <h5 className="col-12 sticker__nombre my-3">{nombre}</h5>
            <p className="col-12 sticker__precio my-2">${precio}</p>
            <Link className="col-7 col-md-5 col-lg-7 col-xl-6 col-xxl-5 my-2 p-0 text-decoration-none" to={`/detalles/${id}`}>
                <button className="sticker__usar">USAR <HiOutlineDownload/> </button>
            </Link>
        </div>
    );

};

export default Item;