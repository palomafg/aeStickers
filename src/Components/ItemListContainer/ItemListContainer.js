import React, { useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import stickers from '../../data/stickers.json';
import Item from '../Item/Item';

const ItemListContainer = () => {

    const [stks, setStks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStickers = new Promise((resolve, reject) => {

        setTimeout(() => {
    
            resolve(stickers);

            reject('Ocurrió un error!');
    
        }, 3000);
        
    });

    getStickers
        .then(response => {
            setStks(response);
            setLoading(false);
        })
        .catch(error => {
            alert(error);
        });

    return (
        <div className="row justify-content-center align-items-center">
            {
            loading ?
                <div className="cargando col-4">
                    <Loader
                    type="ThreeDots"
                    color="#000000"
                    height={90}
                    width={90}
                    timeout={3000}
                    />
                </div>
                :
                stks.map(s => <Item key={s.id} sticker={s.sticker} nombre={s.nombre} precio={s.precio}/>)
            }
        </div>
    );

};

export default ItemListContainer;