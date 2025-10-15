import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <>
         <header>
            <div className="container-title">
                <Link to="/home" className="title">Matemáticas Divertdas</Link>
            </div>

            <div className="container-nav">
                <nav>
                    <Link to="/Home"className="Home" >Home</Link>
                    <Link to="/SobreNosotros" className="About-us" >sobre Nosotros</Link>

                    
                </nav>
                <div className="container-login">
                        <Link to="login"className="login" >iniciar Sesion</Link>
                        <Link to="register" className="register">Registrarse</Link>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;