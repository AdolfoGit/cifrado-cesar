import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [escrito, setEscrito] = useState('');
  const [resultado, setResultado] = useState('');

  const codificar = (cadena, texto) => {
    let res = '';
    texto = texto.toUpperCase();
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      let posicion = cadena.indexOf(caracter);
      if (posicion === -1) {
        res += caracter;
      } else {
        let nuevaPos = (posicion + 5) % cadena.length;
        res += cadena.charAt(nuevaPos);
      }
    }
    return res;
  }

  const descodificar = (cadena, texto) => {
    let res = '';
    texto = texto.toUpperCase();
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      let posicion = cadena.indexOf(caracter);
      if (posicion === -1) {
        res += caracter;
      } else {
        let nuevaPos = (posicion - 5 + cadena.length) % cadena.length;
        res += cadena.charAt(nuevaPos);
      }
    }
    return res;
  }

  const cifrar = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const resultado = codificar(letras, escrito);
    setResultado('Resultado: ' + resultado);
  }

  const descifrar = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const resultado = descodificar(letras, escrito);
    setResultado('Resultado: ' + resultado);
  }

  return (
    <div style={{ textAlign: 'center', border: '2px solid #007f00', borderRadius: '10px', width: '50%', margin: '10% auto', backgroundColor: '#ffffff', padding: '20px' }}>
      <h1 style={{ color: '#007f00' }}>Cifrado César</h1>
      <label htmlFor="escrito" style={{ fontSize: '18px' }}>Ingresa una frase:</label>
      <input type="text" id="escrito" value={escrito} onChange={(e) => setEscrito(e.target.value)} style={{ padding: '10px', border: '2px solid #007f00', borderRadius: '5px' }} />
      <br /><br />
      <div>
        <button onClick={cifrar} style={{ backgroundColor: '#007f00', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Cifrar</button>
        <button onClick={descifrar} style={{ backgroundColor: '#007f00', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Descifrar</button>
      </div>
      <br />
      <p style={{ fontSize: '20px' }}>{resultado}</p>
    </div>
  );
}

export default App;
