import './Register.css'
function Register() {
    return (
       <div className="Container-login">
        <form>
            <div className='container-auth'>
            <h1 className="title">Registrarse</h1>
            <div className="usuario">
                <label>Nombre: </label>
                <input type="text" placeholder="Ingresa tu nombre"/>
            </div>
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

export default Register;