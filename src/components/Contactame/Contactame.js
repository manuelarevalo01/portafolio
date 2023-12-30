import React from "react";
import "../../App.css";
import Footer from "../Footer/Footer";
class Contactame extends React.Component {
  render = () => {
    return (
      <div className="register-content-container">
        <div className="register-content">
          <h1 className="register-title">¡Hablemos de tus necesidades!</h1>
          <hr></hr>
          <div className="register-banner">
            <div className="items-content-register">
              <div className="item-register-left">
                <h1 className="register-item-title">
                  ¡Me encantaría conocer más sobre tus proyectos!
                </h1>
                <h3 className="register-item-subtext">
                  Por favor, completa este formulario para que podamos empezar
                  la conversación y explorar cómo puedo apoyarte.
                </h3>
              </div>
              <div className="item-register-left">
                <iframe
                  title="register-form"
                  src="https://forms.gle/a5xSLgtLRdwYgNTJ8"
                  width="740"
                  height="800"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}
export default Contactame;
