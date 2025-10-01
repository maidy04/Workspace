import './App.css';
import Lista from './Lista';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';

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
    <BrowserRouter>
    <div className="App">
       <Header />
       <Routes>
          <Route path='/' element={<Inicio />} />
           <Route path='/estudiantes'
                  element={<Lista listaestudiantes={estudiantes}  />} />
       </Routes>   
       <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
