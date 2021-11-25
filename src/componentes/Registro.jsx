import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {useState} from "react";
//importar el modulo delcarado en Config/firebase
import firebase from '../Config/firebase';
import './Style.css'; 

const Registro = () => {

  const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
  const [mensajeRegistro, setMensajeRegistro] = useState("");
  
  const handleSubmit = async (event)=>{
      console.log("handleSubmit",form);
      event.preventDefault();
      try{
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password);
        console.log('User', responseUser)
        firebase.db.collection("usuarios")
        .add({
          nombre:form.nombre,
          apellido:form.apellido,
          userId:responseUser.user.uid
        })
        console.log('document', document)
      }catch(e){
        console.log('error', e)
        alert(e.message)
        if (e.code==='auth/weak-password') {
          alert('Debes incluir una contraseña')
        }

      }
  }
  const handleChange = (event)=>{
      const name = event.target.name
      const value = event.target.value
      console.log("handleChange",name,value)
      setForm({...form,[name]:value})
  }

//Boton salir
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/");
  }

  return (
    <>
      <div>
        <h2 className='text-center'>Registrarse</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control 
            type="text"
            name='apellido'
            value={form.apellido} 
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control 
            type="email" 
            name='email'
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            name='password'
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button 
          variant="success" 
          type="submit"
          onClick={() => setMensajeRegistro("Gracias por registrarse")}
        >
          Registrarse
        </Button>{" "}
        <Button className='botonSalir' variant='danger' onClick={handleRoute}>Salir</Button>
        <br />
        {mensajeRegistro}
      </Form>
    </>
  );
};

export default Registro;





