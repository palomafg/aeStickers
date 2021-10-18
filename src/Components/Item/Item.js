import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, sticker, nombre, precio }) => {

    return (
        <div className="card col-4 m-2">
            <img src={sticker} alt="sticker" className="card-img-top img-fluid"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${precio}</p>

                <Link to={`/detalles/${id}`}> <button className="btn btn-primary">Detalles</button> </Link>
            </div>
        </div>
    );

};

export default Item;