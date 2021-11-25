//Listado de productos
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import "./Style.css";

const Productos = (props) => {
  const { destacados, datos } = props;
  const { nombre, descripcion, precio, sku, id } = datos;
  const verDetalle = props.verDetalle !== false ? true : false;

  useEffect(() => {
    console.log("productos", props);
  }, [destacados]);


  return (
    <>
    <Card 
        border="warning" 
        className='container-fluid d-flex justify-content-center' 
        style={{ width: "18rem" }}
    >
        <Card.Body>
          <Card.Header>{nombre}</Card.Header>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            {descripcion}
          </Card.Subtitle>
          <Card.Text>{sku}</Card.Text>
          <Card.Text>{precio}</Card.Text>
          {verDetalle && (
            <Button variant="outline-primary" >
              <Link to={"/detalle/" + id}>Ver Detalle</Link>
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};


export default Productos;
