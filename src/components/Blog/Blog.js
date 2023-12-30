import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import varjo from "../../assets/Tiendas/git.png";
import varjoStore from "../../assets/Tiendas/gitBanner.jpeg";

function Varjo() {
  return <img src={varjo} alt="varjo" className="image-top" />;
}

function VarjoStore() {
  return <img src={varjoStore} alt="varjoStore" className="image-store" />;
}

class Blog extends React.Component {
  render = () => {
    return (
      <div className="register-content-container">
        <div className="register-content">
          <h1 class="txt-title-prices">Navegando por el Desarrollo Web</h1>
          <p className="txt-subtitle-prices">
            Bienvenido!, tu destino definitivo para explorar el emocionante
            mundo del desarrollo web. Desde las últimas tendencias en diseño
            hasta consejos prácticos de codificación, este blog está diseñado
            para inspirar a desarrolladores y entusiastas del desarrollo web.
            Únete conmigo en este viaje digital, donde desglosaremos tecnologías
            emergentes, compartiremos trucos valiosos.
          </p>
          <hr></hr>
          <div className="content-tiendas">
            <div className="grid-stores">
              <div className="item-for-grid">
                <div className="select-a-hov">
                  <div className="txt-store-top">
                    <Varjo></Varjo>
                    <p className="txt-store-lg">¿Qué es Git?</p>
                  </div>
                  <div className="hover12">
                    <figure className="figur-item">
                      <VarjoStore></VarjoStore>
                    </figure>
                    <Link className="item-txt-iner tar-store" to="/git">
                      <p className="buttonSupport">Ir a leer más</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}
export default Blog;
