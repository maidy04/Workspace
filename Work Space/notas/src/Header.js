import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(

        <header className='header'>
        LOGO <hr />
          <nav>

            <ul>
                <li>
                    <Link to="/">Inicio</Link>   
                </li>
                <li>
                    <Link to="/estudiantes">Estudiantes</Link>   
                </li>
            </ul>
          </nav>
        
        </header>
    );
}

export default Header;