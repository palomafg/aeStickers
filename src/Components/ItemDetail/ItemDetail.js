import React from 'react'

const ItemDetail = ({ stk }) => {

    const {sticker, nombre, precio, categoria, descripcion, ejemplo} = stk;

    return (
        <div className="col-12 row justify-content-evenly align-items-center">
            <div className="col-3">
                <img src={sticker} className="img-fluid" alt={nombre} />
            </div>
            
            <div className="col-6 row justify-content-start">

                <div className="col-4 ms-auto">
                    <img src={ejemplo} className="img-fluid" alt="Ejemplo de uso" />
                </div>

                <div className="col-12">
                    <h4>{nombre}</h4>
                    <h5>{precio}</h5>
                    <h6>Categoria: {categoria}</h6>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
