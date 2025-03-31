import { useState } from "react";
import logo from "../../assets/profile.jpg";
import resumePDF from "../../assets/Junaid-Ahmed-FullStack-web-developer-resume.pdf";
import "./Header.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav id="navbar">
      <div className="flex">
        <div className="nameLogo">
          <div className="logoBox">
            <a href="#" className="logo">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="menuBox">
            <div>
              {/* Download resume when clicking "See My Resume" */}
              <a href={resumePDF} download="Junaid-Ahmed-Resume.pdf">
                <div className="myName">Junaid Ahmed</div>
                <div className="CV">Click to See My Resume</div>
              </a>
            </div>
            <div>
              <span className="menuToggle" onClick={toggleMenu}>
                &#9776;
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className={`menu ${menuActive ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#blog">Blogosphere</a>
        </li>
        <li className="active">
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contactMe">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
