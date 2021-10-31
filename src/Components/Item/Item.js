import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';

import './ItemStyle.css';

const Item = ({ id, sticker, nombre, precio }) => {

    return (
        <div className="sticker col-5 col-lg-3 col-xxl-2 mx-sm-3 mx-xl-4 my-4 p-0 p-sm-3 row justify-content-center">
            <img src={sticker} alt="sticker" className="col-12 sticker__img img-fluid p-2 my-1"/>
            <p className="col-12 sticker__precio my-2">${precio}</p>
            <h5 className="col-12 sticker__nombre my-3">{nombre}</h5>
            <Link className="col-9 col-sm-6 col-md-5 col-lg-6 col-xl-5 col-xxl-8 my-2 my-md-3 my-xl-4 p-0 text-decoration-none" to={`/detalles/${id}`}>
                <button className="sticker__usar">USAR <HiOutlineDownload/> </button>
            </Link>
        </div>
    );

};

export default Item;