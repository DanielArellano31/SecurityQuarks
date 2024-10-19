import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import L from 'leaflet';

import { Toast } from "react-bootstrap";

// Define custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1483/1483285.png',
  iconSize: [38, 38],
  iconAnchor: [22, 38],
  popupAnchor: [-3, -38]
});


const polygon3 = [21.8432248955758, -102.30724813902738]
const polygon4 = [21.90568392332854, -102.30666410473273]
const polygon5 = [21.921737343467306, -102.31286412964904]
const polygon6 = [21.926987638199012, -102.29364984309915]
const polygon7 = [21.908596145629566, -102.28087868777347]
const polygon8 = [21.900490155618705, -102.28154777404609]
const polygon9 = [21.885807193595973, -102.25307180184474]
const polygon10 = [21.871985344052344, -102.26749706054703]
const polygon11 = [21.873432369319442, -102.27656407642829]
const polygon12 = [21.879788134831422, -102.31403179590106]
const polygon13 = [21.893392612690516, -102.32218321915451]




const MapaConNotificacion = () => {


  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 30000);

    // Limpiar el temporizador si el componente se desmonta   
    return () => clearTimeout(timer);
  }, []);








  return (
    <Container fluid style={{ position: "relative", height: "100vh" }}>
      {showNotification && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 9999, // Asegura que el toast esté por encima del mapa
          }}
        >
          <Toast onClose={() => setShowNotification(false)} dismissible>
            <Toast.Header className="bg-danger text-white">
              <strong className="me-auto ">Alerta 1</strong>
            </Toast.Header>
            <Toast.Body className="bg-danger text-white">
              Existen demasiadas unidades en la zona!!!!
            </Toast.Body>
          </Toast>
          <Toast onClose={() => setShowNotification(false)} dismissible>
            <Toast.Header className="bg-warning text-white">
              <strong className="me-auto">Alerta 2</strong>
            </Toast.Header>
            <Toast.Body className="bg-warning text-white">
              La zona es insegura!!!!
            </Toast.Body>
          </Toast>
          <Toast onClose={() => setShowNotification(false)} dismissible>
            <Toast.Header className="bg-info text-white">
              <strong className="me-auto">Alerta 3</strong>
            </Toast.Header>
            <Toast.Body className="bg-info text-white">
              Todo está bajo control.
            </Toast.Body>
          </Toast>
        </div>
      )}




      <MapContainer center={[21.88, -102.1659]} zoom={13} style={{ height: '800px', width: '200%' }}>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Circle center={[21.9329380, -102.25874]} fillColor='red' color='red' radius={500}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={[21.857995078290415, -102.31208331894268]} fillColor='red' color='red' radius={100}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado cBootstrap</p>

          </Popup>
        </Circle>

        <Circle center={[21.8432248955758, -102.30724813902738]} fillColor='red' color='red' radius={250}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>


        <Circle center={polygon4} fillColor='green' color='green' radius={500}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon5} fillColor='red' color='red' radius={200}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon6} fillColor='greend' color='green' radius={250}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstra</p>

          </Popup>
        </Circle>

        <Circle center={polygon7} fillColor='red' color='red' radius={250}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon8} fillColor='red' color='red' radius={200}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon9} fillColor='red' color='red' radius={400}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon10} fillColor='red' color='red' radius={300}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon11} fillColor='red' color='red' radius={350}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon12} fillColor='red' color='red' radius={450}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>

        <Circle center={polygon13} fillColor='red' color='red' radius={250}>
          <Popup>
            <h3>Zona Riesgoza</h3>
            <p>Este es un popup estilizado con React Bootstrap</p>

          </Popup>
        </Circle>


        <Marker position={[21.88234, -102.28259]} icon={customIcon} >
          <Popup>
            <h3>Soy una colonia peligrosa!!</h3>
            <p>Av. Alameda, Barrio de la Purísima, 20259 Aguascalientes, Ags.</p>
          </Popup>
        </Marker>
        <Marker position={[21.885315, -102.298687]} icon={customIcon} >
          <Popup>
            <h3>Soy un punto de encuentro!!</h3>
            <p>General Guadalupe Victoria s/n, Zona Centro, 20059 Aguascalientes, Ags.</p>
          </Popup>
        </Marker>
        <Marker position={[21.929971, -102.258934]} icon={customIcon} >
          <Popup>
            <h3>¡Soy una de las colonias mas peligrosas!</h3>
            <p>Av, Ermita de San Sebastián 601, Villas de Ntra. Sra. de la Asunción, 20126 Aguascalientes, Ags.</p>
          </Popup>
        </Marker>
        <Marker position={[21.899264, -102.245454]} icon={customIcon} >
          <Popup>
            <h3>¡Soy una zona de peligro!!!!</h3>
            <p>Asentamiento Irregular los Pericos
              Aguascalientes, Ags.</p>
          </Popup>
        </Marker>
        <Marker position={[21.850196, -102.299149]} icon={customIcon} >
          <Popup>
            <h3>¡Soy una zona peligrosa!!!!</h3>
            <p>P.º del Búho 6315-6317, Pilar Blanco, 20289 Aguascalientes, Ags.</p>
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
export default MapaConNotificacion;
