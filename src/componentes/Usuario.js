import React, {useEffect,useState} from "react"
import PerfilFragment from "./PerfilFragment";
import Arica from "../assets/imagenes/sanpedro.jpg";
import {Link} from "react-router-dom";

const Usuario = () => {

    const [nombre, setNombre] = useState("")
    const handleNombre = (evento) => {
        setNombre(nombre)
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Volver al Principio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><Link to="/perfil">Principio</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <hr></hr>

            <div className="col-4">
                <PerfilFragment
                    imagen={Arica}
                    titulo="Valle de la Luna"
                    textoDescripcion="Les gustaria ir al valle?" />
            </div>

            <hr></hr>

            <h1>Ingresa tu Comentario</h1>
            <label htmlFor="usuario"><h5>.....</h5></label>
            <br/>
            <input type="text"
                   placeholder=".....Hola"
            />

            <input type="checkbox"
                   name="terminos"/>

            <label htmlFor="terminos">Agregar emoji👍</label> <br/>

            <button type="button" onClick={handleNombre}>Enviar</button>

            <hr></hr>

            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Comentarios</li>
                <li className="list-group-item">Me encantaria!</li>
                <li className="list-group-item">Me gustaria ir con mi familia.</li>
                <li className="list-group-item">Que agua mas clara.</li>
                <li className="list-group-item">Anotado en mi lista de viajes.</li>
            </ul>

            <p>Tu respuesta:</p>

            <hr></hr>

        </>
    )
}

export default Usuario