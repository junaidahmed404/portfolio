import "./Footer.css";
import logo from "../../assets/profile.jpg"; // Assuming you have a logo

function Footer() {
  return (
    <footer id="footer" className="footerSection">
      <div className="footerContent">
        <div className="footerLeft">
          <a href="#home" className="footerLogo">
            <img src={logo} alt="Logo" />
          </a>
          <p>
            Crafting digital experiences with passion and precision. Let&apos;s
            build something amazing together!
          </p>
        </div>

        <div className="footerLinks">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contactMe">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footerSocials">
          <h3>Connect with Me</h3>
          <div className="socialIcons">
            <a
              href="https://twitter.com/junaidahmed_98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/junaid-ahmed-1b0a54264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/junaidahmedx98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/junaidahmed404"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2024 Junaid Ahmed. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
