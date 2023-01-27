import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import Mascota from './components/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Name name="sergio" age={30} show={true} />
    <Mascota name="Keiser" age={10} show={true} />
    <Name name="pax" age={31} show={false} />
    <Name name="miriam" age={24} show={false} />
  </React.StrictMode>
);

