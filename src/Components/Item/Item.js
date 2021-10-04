import React from 'react';

const Item = ({img, title, price}) => {

    return (
        <div className="card col-3">
            <img src={img} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    );

};

export default Item;
