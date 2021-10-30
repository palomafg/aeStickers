import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { getFirestore } from '../../services/getFirebase';

import ItemDetail from '../ItemDetail/ItemDetail';
// import { stickers } from '../../data/StickerList.js';

const ItemDetailContainer = ({ id }) => {
    
    const [stk, setStk] = useState([]);
    const [loading, setLoading] = useState(true);

    // const itemSelect = stickers.find(i => i.id === id );

    // const getStickers = new Promise((resolve, reject) => {

    //     setTimeout(() => {

    //         resolve(itemSelect);

    //         reject('Ocurrió un error!');
    
    //     }, 2000);
        
    // });

    const getStickersDB = async () => {
        try {
            console.log('El id es:',id,typeof(id))

            //Traigo la Data Base
            const db = await getFirestore();

            setTimeout(() => {

                //Consigo el sticker seleccionado de la Data Base
                const stickerSelect = db.collection('stickers').doc('5JpMd0BFChZ9EzK1PnRY');
                console.log(stickerSelect)

                //Traigo el sticker Seleccionado
                stickerSelect.get()
                .then((doc) => {

                    console.log(doc)

                    // if(!doc.exists){
                    //     console.log('No existe sticker con ese id');
                    //     return
                    // }
                    // console.log('Sticker encontrado');
                    // setStk({ id: doc.id, ...doc.data() });
                    // console.log(stk)

                })
                .catch((error) => {
                    console.log('Error buscando stickers:', error);

                })
                .finally(() => {
                    setLoading(false);
                })

            }, 2000);

        } catch (error) {
            console.log('Error en la funcion:', error);
        }
    };

    useEffect(() => {

        getStickersDB();

    },[]);

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
                <div className="row justify-content-center">
                    <ItemDetail stk={stk}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer