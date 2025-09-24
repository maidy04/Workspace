import './Estudiante.css';

function Estudiante({nombre, apellido}){
    return (
        <div className='estudiante'>
            <div className='Nombre'>
                <p>{nombre}</p>
            </div>
            <div className='apellido'>
                <p>{apellido}</p> 
            </div>
        </div>
    );
}

export default Estudiante;