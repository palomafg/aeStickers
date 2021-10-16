import React, { useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import stickers from '../../data/stickers.json';

const ItemDetailContainer = () => {

    const [stks, setStks] = useState([]);

    const getStickers = new Promise((resolve, reject) => {

        setTimeout(() => {
    
            resolve(stickers);

            reject('Ocurrió un error!');
    
        }, 2000);
        
    });

    getStickers
        .then(response => {
            setStks(response);
        })
        .catch(error => {
            alert(error);
        });

    // No se me ocurre como tengo que hacer para pasarle cual es el item que tiene que mostrar los detalles

    return (
        <div>
            <ItemDetail item={}/>
        </div>
    )
}

export default ItemDetailContainer
