import { useContext } from "react";
import { HackContext } from "./App";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export const HackTable = () => {
    const { formData } = useContext(HackContext);

    return (
        <Container>
            <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#444', fontWeight: 'bold' }} className= "text-center mt-10 mb-4 card border-warning">Respuestas del Civil</h2>
            <Table striped bordered hover className="mt-3 table-warning">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center- center' }}>#</th>
                        <th style={{ textAlign: 'center' }}>Pregunta</th>
                        <th style={{ textAlign: 'center' }}>Respuesta del civil</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={index} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}><td style={{ textAlign: 'center' }}>1.</td><td>Nombre Completo</td><td>{formData.Q1}</td></tr>
                    <tr  key={index} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}><td style={{ textAlign: 'center' }}>2.</td><td>Edad</td><td>{formData.Q2}</td></tr>
                    <tr  key={index} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}><td style={{ textAlign: 'center' }}>3.</td><td>¿Como ocurrieron los hechos?</td><td>{formData.Q3}</td></tr>
                    <tr  key={index} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}><td style={{ textAlign: 'center' }}>4.</td><td>¿Cuando ocurrieron los hechos?</td><td>{formData.Q4}</td></tr>
                    <tr  key={index} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}><td style={{ textAlign: 'center' }}>5.</td><td>¿Que pertenencias fueron despojadas de tu propiedad?</td><td>{formData.Q5}</td></tr>
                    <tr  key={index} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}><td>6.</td><td>¿El atentado fue realizado con algun arma?</td><td>{formData.Q6}</td></tr>
                </tbody>
            </Table>
            <Button as={Link} to="/" className="mt-3" variant="primary">Regresar al formulario</Button>
        </Container>
    );
};


