import React, { useState, useEffect } from "react";
import Productos from "./Productos";
import firebase from "../Config/firebase";

const Home = (props) => {
  const [productos, setProductos] = useState([]);
  const [destacados, setDestacados] = useState(false);

  const getProductos = async () => {
    try {
      const querySnapshot = await firebase.db.collection("productos").get();
      console.log(querySnapshot.docs);
      setProductos(querySnapshot.docs);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <h2 className='text-center'>Listado de Productos</h2>
      {productos.map((producto) => (
        <Productos
          datos={{ ...producto.data(), id: producto.id }}
          destacados={true}
          verDetalle={true}
        />
      ))}
    </>
  );
};

export default Home;

//equivalente a inicioPage en el curso
