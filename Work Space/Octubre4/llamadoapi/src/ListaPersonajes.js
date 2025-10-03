import './ListaPersonajes.css';
import Personaje from './Personaje';
import { useEffect, useState } from 'react';

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setPersonajes(data));
  }, []);

  return (
    <div className='personajes'>
      <h1>Lista de Personajes</h1>
      {personajes != null ? (
        personajes.results.map((per, index) => (
          <Personaje key={index} name={per.name} status={per.status} />
        ))
      ) : (
        <h2>Cargando...</h2>
      )}
      {/* Para ver el JSON en pantalla */}
      {JSON.stringify(personajes?.results)}
    </div>
  );
}

export default ListaPersonajes;
