import React, { useContext } from 'react';
import { Form, Button, Card, Container, Table } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';
import { HackContext } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ButtonLocal } from './ButtonMap';
export const HackForm = () => {

    
    
    const navigate = useNavigate()

    const [Q1, setQ1] = useState("");
    const [Q2, setQ2] = useState("");
    const [Q3, setQ3] = useState("");
    const [Q4, setQ4] = useState("");
    const [Q5, setQ5] = useState("");
    const [Q6, setQ6] = useState("");

    const onChange = (e) => {
        e.preventDefault()
        if (e.target.name === "Q1") {
            setQ1(e.target.value);
        }
        else if (e.target.name === "Q2") {
            setQ2(e.target.value);
        }
        else if (e.target.name === "Q3") {
            setQ3(e.target.value);
        }
        else if (e.target.name === "Q4") {
            setQ4(e.target.value);
        }
        else if (e.target.name === "Q5") {
            setQ5(e.target.value);
        }
        else if (e.target.name === "Q6") {
            setQ6(e.target.value);
        }
    }



    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/table",{state:{
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
        }});
    };

    return (
        <Container >
            <Card className='mt-5 text-center bg-warning shadow'>
                <Card.Body >
                    <Card.Title className="text-center ">Reporte de Atentado</Card.Title>
                </Card.Body>
            </Card> 

            <Card className="mt-3 shadow card border-warning ">
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>1. Nombre Completo</Form.Label>
                            <Form.Control
                                placeholder="Ingresa tu respuesta"
                                type="text"
                                name="Q1"
                                onChange={onChange}
                            
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>2. Edad</Form.Label>
                            <Form.Control
                                placeholder="Ingresa tu respuesta"
                                type="number"
                                name="Q2"
                                onChange={onChange}
                            
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>3. ¿Como ocurrieron los hechos? </Form.Label>
                            <Form.Control placeholder="Ingresa tu respuesta" type="string" name="Q3" onChange={onChange}></Form.Control>
                        </Form.Group >
                        <Form.Group className="mb-3">
                            <Form.Label>4. ¿Cuando ocurrieron los hechos?</Form.Label>
                            <Form.Control placeholder="Ingresa tu respuesta" type="string" name="Q4" onChange={onChange}></Form.Control>
                        </Form.Group >
                        <Form.Group className="mb-3">
                            <Form.Label>5. ¿Que pertenencias fueron despojadas de tu propiedad?</Form.Label>
                            <Form.Control placeholder="Ingresa tu respuesta" type="string" name="Q5" onChange={onChange}></Form.Control>
                        </Form.Group >
                        <Form.Group className="mb-3">
                            <Form.Label>6. ¿EL atentado fue realizado con algun arma de fuego o punzocortante?  </Form.Label>
                            <Form.Control placeholder="Ingresa tu respuesta" type="string" name="Q6" onChange={onChange}></Form.Control>
                        </Form.Group >
                        <Button variant="warning" type="submit" className="mt-3" > Enviar Respuesta</Button>
                    </Form>
                </Card.Body> 
            </Card>
        </Container>
    );
};
export const HackTable = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <Container >
            <Card className='bg-warning shadow'>
                <Card.Body  >
                    <Card.Title className="text-center">Respuestas Registradas</Card.Title>
                </Card.Body>
            </Card>

            <Table striped bordered hover className= "text-center mt-3 mb-4 table border-warning">
                <thead>
                    <tr style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}>
                        <th className='bg-warning'>#</th>
                        <th className='bg-warning'>Pregunta</th>
                        <th className='bg-warning'>Respuesta del civil</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}>
                        <td>1.</td>
                        <td>Nombre Completo</td>
                        <td>{data.Q1}</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Edad</td>
                        <td>{data.Q2}</td>
                    </tr>
                    <tr style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}>
                        <td>3.</td>
                        <td>¿Cómo ocurrieron los hechos?</td>
                        <td>{data.Q3}</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>¿Cuándo ocurrieron los hechos?</td>
                        <td>{data.Q4}</td>
                    </tr>
                    <tr style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}>
                        <td>5.</td>
                        <td>¿Qué pertenencias fueron despojadas?</td>
                        <td>{data.Q5}</td>
                    </tr>
                    <tr style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}>
                        <td>6.</td>
                        <td>¿Hubo armas?</td>
                        <td>{data.Q6}</td>
                    </tr>
                </tbody>
            </Table>
            <Card> <Button onClick={ButtonLocal}  variant="Primary"  size="large"></Button> Mapeo</Card>
        </Container>
    );
};

  
  