import React, { useState } from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import firebase from '../Config/firebase';
import './Style.css'; 

const Login = () => {
    const [form,setForm] = useState({email:'',password:''})
    const handleSubmit = async (event)=>{
        console.log("handleSubmit",form)
        event.preventDefault()
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(form.email,form.password)
            console.log(responseUser)
            alert("Bienvenido/a")
        }catch(e){
            console.log("Error",e)
            alert(e.message)
            if(e.code==="auth/weak-password"){
                alert("El password debe tener al menos 6 caracteres")
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

    return(
        <div>
            <div>
                <h2 className='text-center'>Iniciar Sesion</h2>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        value={form.password} 
                        onChange={handleChange}>
                        </Form.Control>
                </Form.Group>
                
                <Button type="submit" variant="success">Ingresar</Button>
                <Button className='botonSalir' variant='danger' onClick={handleRoute}>Salir</Button>
            </Form>
        </div>
    )
}

export default Login;

