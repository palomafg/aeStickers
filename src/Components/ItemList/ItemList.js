import React from 'react';
import Item from '../Item/Item';
import sticker1 from '../../multimedia/stck1.png';
import sticker2 from '../../multimedia/stck2.png';
import sticker3 from '../../multimedia/stck3.png';

const stickers = [
    {
        id: 1,
        img: sticker1,
        title: 'Ojo',
        price: 28
    },
    {
        id: 2,
        img: sticker2,
        title: 'Nariz',
        price: 34
    },
    {
        id: 3,
        img: sticker3,
        title: 'Boca',
        price: 79
    }
];

const ItemList = () => {

    const getStickers = new Promise((resolve, reject) => {

        setTimeout(() => {
    
            resolve(stickers);
            reject('Ocurrió un error!');
    
        }, 2000);
        
    });

    let stks = [];

    getStickers
        .then(response => {
            console.log(response);
            response.map(stk => stks.push(stk));
        })
        .catch(error => {
            console.log(error);
        });

        // Aca deberia mapear estos stks(stickers) al componente <Item … /> pero no entiendo como hacerlo, no me sale.

    return (
        <div className="row">
            <Item img={sticker1} title='Ojo' price='28'/>
            <Item img={sticker2} title='Nariz' price='34'/>
            <Item img={sticker3} title='Boca' price='79'/>
        </div>
    );

};

export default ItemList;
