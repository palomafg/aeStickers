import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import ItemDetail from '../ItemDetail/ItemDetail';
import { stickers } from '../../data/StickerList.js';

const ItemDetailContainer = ({ id }) => {

    const [stk, setStk] = useState([]);
    const [loading, setLoading] = useState(true);

    const itemSelect = stickers.find(i => i.id == id );

    const getStickers = new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(itemSelect);

            reject('Ocurrió un error!');
    
        }, 2000);
        
    });

    const getStickersDB = async () => {
        try {
            const response = await getStickers;
            setStk(response);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStickersDB();
    },[stk]);

    return (
        <div>
            {
            loading ?
                <div className="cargando col-4">
                    <Loader
                    type="Rings"
                    color="#000000"
                    height={130}
                    width={130}
                    timeout={3000}
                    />
                </div>
                :
                <ItemDetail stk={stk}/>
            }
        </div>
    )
}

export default ItemDetailContainer