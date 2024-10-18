import { useContext } from "react";
import { HackContext } from "./App";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export const HackTable = () => {
    const { formData } = useContext(HackContext);

    return (
        <Container>
            <h2 className="mt-4">Respuestas del Civil</h2>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pregunta</th>
                        <th>Respuesta del civil</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1.</td><td>Nombre Completo</td><td>{formData.Q1}</td></tr>
                    <tr><td>2.</td><td>Edad</td><td>{formData.Q2}</td></tr>
                    <tr><td>3.</td><td>¿Como ocurrieron los hechos?</td><td>{formData.Q3}</td></tr>
                    <tr><td>4.</td><td>¿Cuando ocurrieron los hechos?</td><td>{formData.Q4}</td></tr>
                    <tr><td>5.</td><td>¿Que pertenencias fueron despojadas de tu propiedad?</td><td>{formData.Q5}</td></tr>
                    <tr><td>6.</td><td>¿El atentado fue realizado con algun arma?</td><td>{formData.Q6}</td></tr>
                </tbody>
            </Table>
            <Button as={Link} to="/" className="mt-3" variant="primary">Regresar al formulario</Button>
        </Container>
    );
};


