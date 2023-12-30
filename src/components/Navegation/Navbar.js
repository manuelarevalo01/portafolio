import { Link } from "react-router-dom";
import { useState } from "react";
import logoHeader from "../../assets/portafolio.png";
function LogoHeader() {
  return <img src={logoHeader} alt="Logo" width={50} />;
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <LogoHeader className="logo" />
            <p className="logo-content-left__text">
              Manuel Fdo. Arévalo Navarro
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            ria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <span>Portafolio</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/curriculum">
                    <span>Curriculum</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactame">
                    <span>Contáctame</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/blog">
                    <span className="nav-title-link">Blog</span>
                  </Link>
                </li>
              </ul>
            </div>
          
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
