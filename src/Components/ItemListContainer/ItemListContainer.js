import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { stickers } from '../../data/StickerList.js';
import ItemList from '../ItemList/ItemList.js';

const ItemListContainer = ( { ctg } ) => {

    const [stks, setStks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStickers = new Promise((resolve, reject) => {

        setTimeout(() => {

            if(ctg){
                let filterCtg = stickers.filter(s => s.categoria == ctg);
                resolve(filterCtg);
                reject('Ocurrió un error!');
            } else{
                resolve(stickers);
                reject('Ocurrió un error!');
            }
                
        }, 2000);

    });

    const getStickersDB = async () => {
        try {
            const response = await getStickers;
            setStks(response);
            setLoading(false);

        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        getStickersDB();
    }, [ctg]);

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
                    timeout={2000}
                    />
                </div>
                :
                stks.map(s => <ItemList key={s.id} stk={s}/>)
            }
        </div>
    );

};

export default ItemListContainer;