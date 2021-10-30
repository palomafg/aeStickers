import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// import { stickers } from '../../data/StickerList.js';
import ItemList from '../ItemList/ItemList.js';
import { getFirestore } from '../../services/getFirebase.js';

const ItemListContainer = ( { ctg } ) => {

    

    // db.collection('items').doc('PIotv081kV9A2rUVEMLW').get(); //item especifico

    const [stks, setStks] = useState([]);
    const [loading, setLoading] = useState(true);

    // const getStickers = new Promise((resolve, reject) => {

    //     setTimeout(() => {

    //         if(ctg){
    //             let filterCtg = stickers.filter(s => s.categoria === ctg);
    //             resolve(filterCtg);
    //             reject('Ocurrió un error!');
    //         } else{
    //             resolve(stickers);
    //             reject('Ocurrió un error!');
    //         }
                
    //     }, 2000);

    // });
    // const response = await getStickers;
    // setStks(response);
    // setLoading(false);

    const getStickersDB = async () => {
        try {

            //Traigo la Data Base
            const db = await getFirestore();

            setTimeout(() => {

                //Consigo la coleccion stickers de la Data Base
                const stickerCollection = db.collection('stickers');

                //Filtro la coleccion por categoria seleccionada
                const filterCtg = stickerCollection.where('categoria', '==', ctg);

                if(ctg){
                    //Traigo los stickers de la categoria y los guardo en el hook stks
                    filterCtg.get().then((resp) => {

                        if(resp.size === 0){
                            console.log("No hay resultados");
                        }

                        setStks(resp.docs.map(doc => doc.data()));
                    })
                    .catch((error) => {
                        console.log("Error:",error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                    
                } else{
                    //Traigo los stickers y los guardo en el hook stks
                    stickerCollection.get().then((resp) => {

                        if(resp.size === 0){
                            console.log("No hay resultados");
                        }

                        setStks(resp.docs.map(doc => doc.data()));
                    })
                    .catch((error) => {
                        console.log("Error:",error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                }
      
            }, 2000);

        } catch (error) {
            console.log("Error catch:", error);
        }
    }

    useEffect(() => {

        setLoading(true);
        getStickersDB();
        
    }, [ctg]);

    return (
        <div className="col-12 col-xl-11 col-xxl-10 row py-4 justify-content-evenly align-items-center">
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
                stks.map(s => <ItemList key={s.id} stk={s}/>)
            }
        </div>
    );

};

export default ItemListContainer;