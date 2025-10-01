import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { temasDinamicaNivel2 } from '../data/dinamicaNivel2';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import '../styles/base/_variables.css';

export default function DinamicaNivel2() {
  useEffect(() => {
    console.log('Dinamica mounted');
    console.log('temasDinamicaNivel2 ->', temasDinamicaNivel2);
  }, []);

  return (
    <Layout title="Dinámica" intro="Estudia la dinámica de los cuerpos en movimiento.">
          <div className="tema-cards-row">
            {Array.isArray(temasDinamicaNivel2) && temasDinamicaNivel2.map((tema) => (
              <div
                className={`tema-card ${tema.tipo}`}
                key={tema.tipo}
                data-theme={tema.tipo}
              >
                <span className="tema-card-icon">
                  <img src={tema.icono} alt={tema.titulo} />
                </span>
                <div className="tema-card-content">
                  <div className="tema-card-title">{tema.titulo}</div>
                  <div className="tema-card-desc">{tema.descripcion}</div>
                  <Link className={`tema-card-btn ${tema.btn.clase}`} to={tema.btn.link} state={{ variant: tema.btn.clase, palette: tema.palette }}>
                    {tema.btn.texto}
                  </Link>
                </div>
              </div>
            ))}
      </div>

      <div className="compara-card" style={{ marginTop: '1.5rem' }}>
        <strong>Resumen rápido:</strong>
        <br />
        Fuerza: interacción que cambia el estado de movimiento.
        <br />
        2ª Ley: F = m·a (relación dinámica fundamental).
        <br />
        Trabajo: transfiere energía mediante fuerza y desplazamiento.
        <br />
        Energía mecánica: se conserva sin fuerzas no conservativas.
        <br />
        Impulso: cambio de momentum (J = Δp).
        <br />
        Choques: elásticos vs inelásticos (conservación de p, a veces de energía).
        <br />
        Torque: causa rotación (τ = r × F).
        <br />
        Equilibrio: ΣF = 0 y Στ = 0.
        <br />
        Gravitación: atracción universal (F = G m₁ m₂ / r²).
        <br />
        Oscilaciones: Ley de Hooke y movimiento armónico simple (F = -kx).
        <br />
        Máquinas simples: palancas, planos inclinados y poleas (W = F·d).
      </div>
    </Layout>
  );
}