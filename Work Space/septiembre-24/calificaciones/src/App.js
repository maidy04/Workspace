import logo from './logo.svg';
import './App.css';
import Componente from './Componente.js';
import Estudiante from './Estudiante.js'

function App() {
  return (
    <div className="App">
      
     <Componente />
    <Estudiante nombre="Maidy" apellido="granada"/>
    <Estudiante nombre="Maidy" apellido="granada"/>
    <Estudiante nombre="Maidy" apellido="granada"/>

    </div>
  );
}

export default App;
