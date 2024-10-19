import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HackForm, HackTable } from './HackForm'; // Importa ambos componentes
import 'bootstrap/dist/css/bootstrap.min.css';



export const HackContext = React.createContext();

const App = () => {
  const [formData, setFormData] = useState({
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: ""
  });

  return (
    <HackContext.Provider value={{ formData, setFormData }}>
      <Router>
        <Routes>
          <Route path="/" element={<HackForm />} /> {/* Página de formulario */}
          <Route path="/table" element={<HackTable />} /> {/* Página de tabla */}
         
        </Routes>
      </Router>
    </HackContext.Provider>
  );
};

export default App;

App