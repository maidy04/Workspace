import './Login.css';

function Login() {
    return (
       <div className="Container-login">
        <form>
            <div className='container-auth'>
                <h1 className="title">Iniciar Sesion</h1>
            <div className="correo">
                <label>Correo: </label>
                <input type="email" placeholder="Ingresa tu correo"/>
            </div>

            <div className="contraseña">
                <label>contraseña: </label>
                <input type="password" placeholder="Ingresa tu contraseña"/>
            </div>
            <div className='container-btn'>
            <button className='continuar-btn'>Continuar</button>

            </div>
            </div>
        </form>
       </div>

    )
}

export default Login;