import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
       {nombre: "Maidy", apellido: "Granada"},
       {nombre: "Thomas", apellido: "Perez"},
       {nombre: "Anna", apellido: "Jaramillo"},
       {nombre: "Santiago", apellido: "Vargas"},
       {nombre: "Melissa", apellido: "Berrio"},
       {nombre: "Sofia", apellido: "Monsalve"},
       {nombre: "Gabriel", apellido: "Rodriguez"},
       {nombre: "Esteban", apellido: "Rubio"}
  ];
 
  return (
    <div className="App">
       <Lista listaestudiantes={estudiantes} />
       <Footer />

    </div>
  );
}

export default App;
