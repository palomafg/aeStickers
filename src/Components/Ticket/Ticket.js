import React from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

import './TicketStyle.css'

const Ticket = ({ compra, ordenId }) => {

    const { buyer, fecha, stickers, totalCompra } = compra;

    return (
        <div className="col-6 row justify-content-center">

            <div className="col-12 my-4 row">
                <Link to="/" className="cerrar col-1 p-0 ms-auto text-decoration-none">
                    <CgClose/>
                </Link>
            </div>

            <h1 className="col-12 my-4 text-center">Tu compra</h1>

            <div className="col-12 my-3">
                <p className="m-1">Orden: {ordenId}</p>
                <p className="m-1">{fecha.toDate().toLocaleString()}</p>
            </div>

            <hr/>

            <div className="col-10 my-1 d-flex justify-content-between">
                <span>Cant</span>
                <span>Sticker</span>
                <span>Precio</span>
            </div>

            <hr/>

            <div className="col-10 my-1">
                {
                    stickers.map( (stk) => {
                        const { cantidad, sticker } = stk;

                        return(
                            <div key={sticker.id} className="d-flex justify-content-between">
                                <span>{cantidad}</span>
                                <span>{sticker.nombre}</span>
                                <span>${sticker.precio}</span>
                            </div>
                        )
                    })
                }
            </div>

            <hr/>

            <h5 className="col-11 my-1 text-end">Total: ${totalCompra}</h5>

            <hr/>

            <div className="col-12 my-3">
                <p>Datos de compra:</p>
                <p><AiOutlineUser/> {buyer.nombre} {buyer.apellido}</p>
                <p><AiOutlineMail/> {buyer.email}</p>
                <p><AiOutlinePhone/> {buyer.telefono}</p>
            </div>
        </div>
    )
}

export default Ticket
