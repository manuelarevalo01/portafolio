import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import git from "../../assets/Blogs/git.png";
import gitBanner from "../../assets/Blogs/gitBanner.jpeg";

function Git() {
  return <img src={git} alt="git" className="image-top" />;
}

function GitBanner() {
  return <img src={gitBanner} alt="gitBanner" className="image-store" />;
}

class Blog extends React.Component {
  render = () => {
    return (
      <div className="register-content-container">
        <div className="register-content">
          <h1 class="txt-title-prices">Navegando por el Desarrollo Web</h1>
          <p className="txt-subtitle-prices">
            Bienvenido! Explora el emocionante mundo del desarrollo web. Aca
            encontraras desde las últimas tendencias en diseño, hasta consejos
            prácticos de codificación, este blog está diseñado para inspirar a
            desarrolladores y entusiastas del desarrollo web. Únete conmigo en
            este viaje digital, donde desglosaremos tecnologías emergentes y
            compartiremos trucos valiosos.
          </p>
          <hr></hr>
          <div className="content-tiendas">
            <div className="grid-stores">
              <div className="item-for-grid">
                <div className="select-a-hov">
                  <div className="txt-store-top">
                    <Git></Git>
                    <p className="txt-store-lg">¿Qué es Git?</p>
                  </div>
                  <div className="hover12">
                    <figure className="figur-item">
                      <GitBanner></GitBanner>
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
