import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';

const Categorias = () => {

    let { ctg } = useParams();

    return (
        <ItemListContainer ctg={ctg}/>
    )
}

export default Categorias
