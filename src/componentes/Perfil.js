import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import PerfilFragment from "./PerfilFragment";
import Homero from "../assets/imagenes/homero.jpg"
import SanPedro from "../assets/imagenes/sanpedro.jpg"
import CR7 from "../assets/imagenes/cr7.avif"
const Perfil = () => {


    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Principal <span
                                    className="sr-only">Dirigase al Usuario</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><Link to="/usuario">Usuario</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="jumbotron text-center mb-4">
                    <hr></hr>
                    <h1>Biografia</h1>
                    <p>Mi nombre es Juan Pablo Saavedra, tengo 22 años y mi pasatiempo favorito es jugar diversos tipos de juegos con amigos en linea y hacer deporte, en mayor parte futbol.</p>
                    <hr></hr>

                </div>

                <div className="row">
                    <div className="col-4">
                        <PerfilFragment
                            imagen={Homero}
                            titulo="Como soy?"
                            textoDescripcion="Me considero una persona bastante ordenada y graciosa, con un sentido del humor muy bueno y bastante pasiencia." />
                    </div>

                    <div className="col-4">
                        <PerfilFragment
                            imagen={SanPedro}
                            titulo="Lugar favorito?"
                            textoDescripcion="Uno de los lugares que mas me gusta y que mas tiempo paso, es el valle de la luna en San Pedro de Atacama." />
                    </div>

                    <div className="col-4">
                        <PerfilFragment
                            imagen={CR7}
                            titulo="Pasatiempo favorito?"
                            textoDescripcion="Uno de mis principales pasatiempos es jugr al futbol, estos ultimos meses menos ya que la universidad me demanda gran parte del tiempo, pero siempre que puedo asisto a los partidos." />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Perfil