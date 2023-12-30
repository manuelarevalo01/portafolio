import React from "react";
import gitBanner from "../assets/Tiendas/gitBanner.jpeg";
import instalationGit from "../assets/Tiendas/intalacionGit.png";
import instalacionGit from "../assets/Tiendas/instalacionGit.png";
import empecemosGit from "../assets/Tiendas/empecemosGit.png";
import Footer from "../../src/components/Footer/Footer";
import "../App";

function GitBanner() {
  return (
    <img
      src={gitBanner}
      alt="gitBanner"
      style={{
        width: "60%",
      }}
    />
  );
}
function InstalationGit() {
  return (
    <img
      src={instalationGit}
      alt="instalationGit"
      style={{
        width: "60%",
      }}
    />
  );
}
function InstalacionGit() {
  return (
    <img
      src={instalacionGit}
      alt="instalacionGit"
      style={{
        width: "60%",
        marginBottom: "20px",
      }}
    />
  );
}
function EmpecemosGit() {
  return (
    <img
      src={empecemosGit}
      alt="empecemosGit"
      style={{
        width: "60%",
      }}
    />
  );
}
class GitHistory extends React.Component {
  render = () => {
    return (
      <div className="content-prices-container">
        <div className="content-prices">
          <div className="item-content-prices">
            <div className="content-plan">
              <div className="items-content-plan">
                <p className="txt-title-prices">¿Qué es Git?</p>
                <hr></hr>
                <p className="txt-parragra">
                  Git es un sistema de control de versiones creado inicialmente
                  por Linus Torvalds, el mismo creador del kernel de Linux. Git
                  nació cuando el kernel de Linux utilizaba un sistema de
                  control de versiones llamado BitKeeper, pero éste era
                  privativo (o de código cerrado) y cuando los colaboradores del
                  kernel decidieron buscar otros sistemas se dieron cuenta de
                  que ninguna de las alternativas que había en ese momento era
                  suficiente.
                </p>

                <GitBanner />
                <p className="txt-parragra">
                  Git nos permite gestionar, distribuir y colaborar en nuestro
                  código para que esté organizado y haya un flujo de trabajo
                  eficiente cuando se programa con varias personas, también nos
                  ayudará a hacer cosas como volver a versiones anteriores de
                  nuestro proyecto, o ver lo que han programado las otras
                  personas que colaboran en nuestro proyecto.
                </p>
                <p className="txt-title-prices">Instalación de Git</p>
                <hr></hr>
                <p className="txt-parragra">
                  Puedes instalar Git en tu ordenador de varias maneras, la más
                  fácil es si tienes un gestor de paquetes, como aptitude,
                  <span>
                    <a
                      className="blog-link"
                      href="https://brew.sh/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      brew
                    </a>{" "}
                    o{" "}
                    <a
                      className="blog-link"
                      href="https://chocolatey.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      chocolatey.
                    </a>
                  </span>
                  .Si tienes alguno de estos sólo tienes que ejecutar esta línea
                  en tu terminal, si estás en linux o MacOS y no funciona
                  correctamente puedes ejecutarlo con la instrucción sudo al
                  principio del comando.
                </p>
                <InstalationGit></InstalationGit>
                <p className="txt-parragra">
                  Si no tienes instalado el gestor de paquetes puedes instalarlo
                  usando la distribución oficial en la
                  <a
                    className="blog-link"
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    web
                  </a>
                </p>
                <InstalacionGit></InstalacionGit>
                <p className="txt-title-prices">Empecemos con Git</p>
                <hr></hr>
                <p className="txt-parragra">
                  Para empezar vamos a crear una carpeta, y abrir esa carpeta en
                  la terminal, luego debemos inicializar nuestro repositorio,
                  para ello ejecutamos el comando git init y debería decir que
                  el repositorio ha sido inicializado y ahora podemos empezar a
                  gestionar versiones en nuestro código. Para empezar a ejecutar
                  los comandos vamos a crear un código de ejemplo, en este caso
                  un documento HTML donde vamos a crear una lista de deseos
                  navideños.
                </p>
                <EmpecemosGit></EmpecemosGit>
                <p className="txt-parragra">
                  Cuando guardamos este archivo podemos hacer un commit, que nos
                  permitirá guardar los cambios en este archivo. veamos el
                  ejemplo. Lo primero que haremos es añadir el archivo a git,
                  para ello haremos el siguiente comando.
                </p>
                <div
                  style={{
                    backgroundColor: "#161b22",
                    padding: "10px",
                    width: "60%",
                  }}
                >
                  <code style={{ color: "#fff" }}>git add index.html</code>
                </div>
                <p className="txt-parragra">
                  Este comando hará que git empiece a comprobar los cambios en
                  nuestro archivo, y el último paso antes de hacer nuestros
                  primeros commits es ejecutar estos comandos para
                  identificarnos.
                </p>
                <div
                  style={{
                    backgroundColor: "#161b22",
                    padding: "10px",
                    width: "60%",
                    lineHeight: "1.5",
                  }}
                >
                  <code style={{ color: "#fff" }}>
                    <p>git config --global user.name "manuelarevalo01"</p>
                    <p>
                      git config --global user.email manuelarevalo01@example.com
                    </p>
                  </code>
                </div>
                <p className="txt-parragra">
                  Sólo cambia el nombre y el correo electrónico por tu nombre y
                  dirección de correo electrónico. Ahora la última parte es
                  hacer un commit, simplemente ejecuta el siguiente comando y
                  cambia el mensaje por el que quieras.
                </p>
                <div
                  style={{
                    backgroundColor: "#161b22",
                    padding: "10px",
                    width: "60%",
                  }}
                >
                  <code style={{ color: "#fff" }}>git commit -m "mensaje"</code>
                </div>
                <p className="txt-parragra">
                  Y si todo ha ido bien, enhorabuena has hecho tu primer commit,
                  ahora sigue aprendiendo porque git es una herramienta esencial
                  en el desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}

export default GitHistory;
