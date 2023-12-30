import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import imageHuawei from "../../assets/Experiencia/huawei-logo.jpg";
import imageUnipaz from "../../assets/Experiencia/Unipaz.jpeg";
import imageColMonseñor from "../../assets/Experiencia/ColMonseñor.jpeg";
import imageGuaneEnterprises from "../../assets/Experiencia/guane enterpises.png";
import imageBanner from "../../assets/DSC_0088.JPG";
import Footer from "../Footer/Footer";
import "../../App.css";

function ImageBanner() {
  return <img className="image-banner" src={imageBanner} alt="imageBanner" />;
}
function ImageHuawei() {
  return <img src={imageHuawei} alt="imageHuawei" className="image-content" />;
}
function ImageUnipaz() {
  return <img src={imageUnipaz} alt="imageUnipaz" className="image-content" />;
}
function ImageColMonseñor() {
  return (
    <img
      src={imageColMonseñor}
      alt="imageColMonseñor"
      className="image-content_item"
    />
  );
}
function ImageGuaneEnterprises() {
  return (
    <img
      src={imageGuaneEnterprises}
      alt="imageGuaneEnterprises"
      className="image-content_item"
    />
  );
}
class Portafolio extends React.Component {
  render = () => {
    return (
      <div className="content-banner-container">
        <div className="content-banner">
          <div className="items-content-banner">
            <div className="item-content-right">
              <picture className="item-content-picture">
                <ImageBanner />
              </picture>
            </div>
            <div className="item-content-left">
              <div className="item-content-title">
                <div className="typed-element">
                  <h1 className="txt-title">
                    Ingeniero Electrónico - Esp. en Telecomunicaciones
                    <span className="txt-title-span">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("Linkedin")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Correo electrónico")
                            .start()
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Contáctame!");
                        }}
                      />
                    </span>
                  </h1>
                </div>
              </div>
              <div className="item-content-subtitle">
                <p className="txt-subtitle">
                  Titulado de la Universidad Industrial de Santander; mi
                  formación me permite crear e implementar soluciones
                  innovadoras y oportunas, por lo cual puedo desarrollar,
                  controlar, operar y mantener dispositivos, equipos y sistemas
                  electrónicos. Profesional solidario, responsable, ético,
                  puntual, creativo, tolerante, comprometido con el trabajo,
                  cuidadoso con el medio ambiente, con capacidad para trabajar
                  en equipos interdisciplinarios. Con competencias para aprender
                  autónomamente y adaptarse a las realidades del medio, en
                  consonancia con el continuo cambio tecnológico y científico.
                  Poseo sólida fundamentación en telecomunicaciones,
                  procesamiento de señales, informática, desarrollo de software
                  (FrontEnd), máquinas eléctricas e instrumentación electrónica.
                </p>
              </div>
              <Link className="content-whatsApp" to="/curriculum">
                <p className="txt-wsp">Conoce más de mi curriculum aquí</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-ourProduct">
          <div className="content-ourProduct-title">
            <p className="content-ourProduct-txt-title">Experiencia Laboral</p>
            <p className="content-ourProduct-txt-subtitle">
              Trayectoria Profesional: Innovación y Liderazgo en diferentes
              campos.
            </p>
          </div>
          <div className="content-ourProduct-card">
            <div className="items-content-ourProduct">
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageHuawei className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">Serdan S.A - Huawei</p>
                  <p className="item-subtext">
                    Field Supervisor 1, desempeñando y supervisando labores
                    diarias en el área de las Telecomunicaciones,
                    correspondientes a transmisión de primer y segundo nivel,
                    para equipos Huawei, ZTE y CISCO, parte eléctrica y
                    electromecánica. Mantenimientos preventivos, mantenimientos
                    correctivos, atención de emergencias y disponibilidad las
                    veinticuatro horas del día, los siete días de la semana para
                    realizar dichas tareas programadas y repentinas.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-content-ourProduct">
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageColMonseñor className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">
                    Institución Educativa Monseñor Pacheco
                  </p>
                  <p className="item-subtext">
                    Docente de tiempo completo en las área de Tecnología e
                    Informática de 6o a 11o y como docente en el área de
                    matemáticas en los grados de 10o a 11o. Dentro de los logros
                    se llevaron a cabo muchos proyectos tecnológicos, trabajados
                    por estudiantes y que beneficiaron a la Institución
                    educativa.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-content-ourProduct">
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageUnipaz className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">
                    Instituto Universitario de la Paz (UNIPAZ)
                  </p>
                  <p className="item-subtext">
                    Docente de tiempo completo en la escuela de ingeniería de
                    producción, desarrollando apoyo académico y evaluativo en
                    materias tales como: Maquinas y Equipos, Electiva Programa
                    de Proyectos, Control Eléctrico, Sistemas Automatizados,
                    Circuitos Eléctricos DC, Dibujo Electromecánico, entre
                    otras. Seguimiento y apoyo de trabajos de investigación a
                    estudiantes en sus últimos semestres académicos para la
                    obtención de titulo de grado.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-content-ourProduct">
              <div class="txt-badged-content">
                <p class="txt-badged">Actualmente</p>
                <span class="animate-ping pings"></span>
              </div>
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageGuaneEnterprises className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">Guane Enterprises S.A.S</p>
                  <p className="item-subtext">
                    Desarrollador FrontEnd, perteneciendo inicialmente al equipo
                    bootcamp Guane, luego en el cargo de Beginner Developer
                    FrontEnd y actualmente en el cargo de Desarrollador FrontEnd
                    Junior, trabajamos en la interfaz desde el código para que
                    el usuario pueda interactuar, donde nos encargamos de la
                    parte visual de la web, también nos encargamos de programar
                    el código para hacer que la interfaz sea atractiva,
                    intuitiva y que la experiencia de usuario o navegación sea
                    agradable para su público objetivo. Aptitudes: ·HTML5 ·Hojas
                    de estilos en cascada(CSS) ·SASS ·Vue.js ·JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-consultant support">
          <div className="items-consultant">
            <p className="text-support">
              <span className="text-support_subtitle">
                Explorando Oportunidades:{" "}
              </span>{" "}
              ¿Interesado en conocer mi experiencia y habilidades?
            </p>
            <p className="subtextSupport">
              Conéctate para descubrir más sobre mis logros y contribuciones
              profesionales.
            </p>
            <a href="mailto:manferare1@gmail.com">
              <button className="buttonSupport">Conéctate conmigo</button>
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}

export default Portafolio;
