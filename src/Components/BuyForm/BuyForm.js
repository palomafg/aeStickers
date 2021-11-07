import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import firebase from "firebase";
import 'firebase/firestore';

import { getFirestore } from '../../services/getFirebase';
import { CartContextUse } from '../../Contexts/CartContext';

const BuyForm = ({ total, setBuying, setOrdenId }) => {

    const { clear, cart } = CartContextUse();
    const [goodForm, setGoodForm] = useState(false);
    const [goodEmail, setGoodEmail] = useState(false);

    //Datos para la orden de compra
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [emailVerif, setEmailVerif] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('Compra realizada!');
        
        putOrdersDB();
    }

    const putOrdersDB = async () => {
        try {

            //Traigo la Data Base
            const db = await getFirestore();

            //Referencio el doc Ordenes
            const ordenes = db.collection('ordenes');

            //Creo la orden
            const orden = 
                {
                buyer: {nombre, apellido, email, telefono},
                stickers: cart,
                fecha: firebase.firestore.Timestamp.fromDate(new Date()),
                totalCompra: total
                }
            
            console.log(orden)

            //Creo el documento
            ordenes.add(orden)
                        .then(({ id }) => {

                            console.log(id);
                            setOrdenId(id);
                        })
                        .catch(e => console.log('error al crear orden:', e))
                        .finally(() => {
                            setBuying(false);
                            clear();
                        })
        }
        catch {
            console.log('error de compra')
        }
    }

    useEffect(() => {
        
        if(
            nombre !== '' &&
            apellido !== '' &&
            email !== '' &&
            telefono !== '' &&
            email === emailVerif
        ){
            setGoodForm(true);
        } else{
            setGoodForm(false);
        }

        if(email === emailVerif){
            setGoodEmail(true);
        } else{
            setGoodEmail(false);
        }

    }, [nombre, apellido, email, telefono, emailVerif])

    return (
        <Form className="col-10 row" onSubmit={handleSubmit}>

            <Form.Group className="col-6 my-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={e => setNombre(e.target.value)} type="name" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="col-6 my-3" controlId="formApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control onChange={e => setApellido(e.target.value)} type="name" placeholder="Apellido" />
            </Form.Group>

            <Form.Group className="col-6 my-3" controlId="formEmail">
                <Form.Label>Tu email</Form.Label>
                <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="ejemplo@mail.com" />
            </Form.Group>

            <Form.Group className="col-6 my-3" controlId="formConfirmEmail">
                <Form.Label>Confirmá tu email</Form.Label>
                <Form.Control onChange={e => setEmailVerif(e.target.value)} type="email" placeholder="ejemplo@mail.com" />
            </Form.Group>

            
            <div>
                {
                    email !== '' && emailVerif !== '' ?
                        goodEmail ?
                            <p className="text-success">Estan iguales</p>
                            :
                            <p className="text-danger">Estan distintos</p>
                        :
                        <p> </p>
                }
            </div>

            <Form.Group className="col-6 my-3" controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control onChange={e => setTelefono(e.target.value)} type="phone" placeholder="+54 9 11 666 345" />
            </Form.Group>

            <div className="col-12 d-flex justify-content-center">
            {
                goodForm ?
                    <Button variant="primary" type="submit">
                        Comprar
                    </Button>
                    :
                    <Button disabled variant="primary" type="submit">
                        Comprar
                    </Button>
            }
            </div>

        </Form>
    )
}

export default BuyForm
