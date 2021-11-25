import React, { useState, useEffect } from "react";
import firebase from "../Config/firebase";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner'
import Productos from "./Productos";
import "./Style.css";

const Detalle = (props) => {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [productos, setProducto] = useState({});
  const [mensajeCompra, setmensajeCompra] = useState("");

  useEffect(() => {
    async function request() {
      try {
        const document = await firebase.db.doc("productos/" + id).get();
        setLoading(false);
        setProducto(document.data());
      } catch (e) {}
    }
    request();
  }, [id]);

  if (loading) {
    return <div><Spinner className='spinner' animation="border" variant="warning" /></div>;
  } else {
    return (
      <>
        <div>{<Productos datos={productos} verDetalle={false} />}</div>
        <Button className='botonComprar'
          variant="outline-warning"
          onClick={() => setmensajeCompra("Gracias por su compra!!")}
        >
          Comprar
        </Button>{" "}
        <div className='mensajeComprar'>
          {mensajeCompra}
        </div>
        
      </>
    );
  }
};

export default Detalle;
