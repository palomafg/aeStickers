import React from 'react';
import { useParams } from 'react-router';

import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';

const Detalles = () => {

    let { id } = useParams();

    return (
        <ItemDetailContainer id={id} />
    )
}

export default Detalles
