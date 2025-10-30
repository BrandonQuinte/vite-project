import React from 'react';
import './ProgramGrid.css';

function ProgramGrid() {
  const programas = [
    "ADSO", 
    "REDES DE DATOS", 
    "ANIMACIÓN 3D", 
    "LOGÍSTICA", 
    "MERCADÉO", 
    "SISTEMAS"
  ];

  return (
    <section className="program-grid">
      {programas.map((p, i) => (
        <div key={i} className="program-card">{p}</div>
      ))}
    </section>
  );
}

export default ProgramGrid;
