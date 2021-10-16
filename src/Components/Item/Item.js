import React from 'react';

const Item = ({sticker, nombre, precio}) => {

    return (
        <div className="card col-4 m-2">
            <img src={sticker} alt="sticker" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${precio}</p>
                <button className="btn btn-primary">Detalles</button>
            </div>
        </div>
    );

};

export default Item;