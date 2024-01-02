import React from "react";
import Footer from "../Footer/Footer";
import "../../App.css";

class Curriculum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };
  render = () => {
    return (
      <div className="content-prices-container">
        <div className="content-prices">
          <div className="item-content-prices">
            <div className="content-plan">
              <div className="items-content-plan">
                <p className="txt-title-prices">
                  ¡Bienvenido/a a mi espacio profesional!
                </p>
                <p className="txt-subtitle-prices">
                  Descubre la historia detrás de mi trayectoria laboral, donde
                  he cultivado habilidades y experiencias en diferentes campos
                  profesionales. Este es un viaje a través de mis logros,
                  proyectos destacados y contribuciones en el ámbito profesional
                  y laboral. ¡Acompáñame mientras navegas por mi currículum para
                  conocer más sobre mi compromiso con la excelencia y mi pasión
                  por la ingenieria! ¡Tu oportunidad de descubrir lo que puedo
                  aportar a tu equipo comienza aquí!
                </p>
                <hr></hr>
                <div
                  style={{ height: "600px", margin: "10px", display: "flex" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {this.state.loading && <div className="spinner"></div>}

                    <iframe
                      title="Curriculum"
                      src="https://drive.google.com/file/d/1K4cbMGzqwUuTMQxIf--9cdR97yYA9Rn4/preview"
                      width="500"
                      height="600"
                      frameborder="0"
                      onLoad={this.hideSpinner}
                      style={{
                        display: this.state.loading ? "none" : "flex",
                      }}
                    >
                      Loading…
                    </iframe>
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
export default Curriculum;
