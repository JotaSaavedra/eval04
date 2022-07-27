import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import Homero from "../assets/imagenes/homero.jpg"

const Inicio = () => {

    return (
        <>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Redes Sociales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Links</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Salir</a>
                </li>
            </ul>

            <h1>Que te gustaria visitar?</h1>
            <div>
                <h5>Bibliografía</h5>
                <Link to="/perfil">Perfil</Link> <br/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Aca encontraras mucho sobre mi. <span
                            className="text-muted"> Mi personalidad, mis pasatiempos, etc.</span></h2>
                        <p className="lead">Quieres saber mas de mi? Preciona el link de "Perfil" y conoceras de mi persona.</p>
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>



                <h5>Redes Sociales</h5>
                <Link to="/usuario">Usuario</Link>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Aca podras dejarme un comentario sobre mi lugar favorito.<span
                            className="text-muted"> Su paisaje, sus vistas, etc.</span></h2>
                        <p className="lead">Quieres dejar tu comentario sobre el valle de la luna? da click en "Usuario".</p>
                    </div>
                    <div className="col-md-5">

                    </div>
                </div>

            </div>
        </>
    )
}

export default Inicio