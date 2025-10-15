import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import SobreNosotros from './Components/Pages/Sobre-nosotros';

function App() {
  return (
      <>   
    <BrowserRouter>
          <Header/> 
      <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SobreNosotros' element={<SobreNosotros/>} />

          <Route path='/Register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;

