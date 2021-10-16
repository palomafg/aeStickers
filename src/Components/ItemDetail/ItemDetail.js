import React from 'react'

const ItemDetail = (item) => {

    const {sticker, nombre, precio, categoria, descripcion, ejemplo} = item;

    return (
        <div>
            <img src={sticker} alt={nombre} />
            <img src={ejemplo} alt="Ejemplo de uso" />
            <h4>{nombre}</h4>
            <h5>{precio}</h5>
            <h6>Categoria: {categoria}</h6>
            <p>{descripcion}</p>
        </div>
    )
}

export default ItemDetail
