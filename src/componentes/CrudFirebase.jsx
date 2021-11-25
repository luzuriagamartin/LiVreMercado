//Componente CRUD de productos.
//Para ingresar: http://localhost:3000/crud o en opciones - Alta de Productos
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from "../Config/firebase";
import { useHistory } from "react-router-dom";
import './Style.css'; 

const CrudFirebase = () => {
    const [producto, setProducto] = useState({nombre:'', precio:'', sku:'', descripcion:''})
    const [mensajeCrud, setMensajeCrud] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const document = await firebase.db.collection('productos')
            .add(producto)
            console.log('Document', document)
        }catch(e){
            console.log('error', e)
        }
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log('handleChange', name, value)
        setProducto({...producto,[name]: value})
    }

//Boton salir
const history = useHistory();

const handleRoute = () =>{ 
    history.push("/");
}

    return (
        <>
            <div>
                <h2 className='text-center'>Alta de Productos</h2>
            </div>

            <Form onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        name='nombre'
                        value={producto.nombre}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="text"
                        name='precio'
                        value={producto.precio}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>SKU</Form.Label>
                    <Form.Control 
                        type="text" 
                        name='sku'
                        value={producto.sku}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        type="text" 
                        name='descripcion'
                        value={producto.descripcion}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button 
                    variant='success'
                    type='submit'
                    onClick={() => setMensajeCrud("Se ha agregado el libro")}>
                    Guardar
                </Button>
                <Button className='botonSalir' variant='danger' onClick={handleRoute}>Salir</Button>
                {mensajeCrud}
            </Form>
    </>
    )
}

export default CrudFirebase
