import "./ServicesSection.css";
import WordPress from "../../../assets/Wordpress.jpg";
import Custom from "../../../assets/R.jpg";
import Frontend from "../../../assets/frontend_webdeveloper.jpg";
import Graphics from "../../../assets/Graphics.jpg";
import ContactMeSection from "../ContactSection/ContactSection";
function ServicesSection() {
  return (
    <section id="Services" className="section">
      <h1 className="colorChangeHeading" style={{ paddingTop: "5rem" }}>
        Solutions Spectrum
      </h1>
      <p style={{ fontSize: "1.5rem", paddingTop: "1rem" }}>
        Mission Is To Make Your <strong>Business</strong> Better Through
        Technologies And Online Appearance
      </p>
      <p style={{ fontSize: "2rem", color: "rgb(0, 255, 0)", padding: "1rem" }}>
        Your Vision + My Visuals ={" "}
        <span style={{ color: "rgb(0, 255, 0)" }}>$$$</span>
      </p>
      <div className="border ServicesDiv">



        <div className="ServicesBox">
          
          <div className="serviceOfferCard border">
            <img src={Custom} alt="Custom WebApp Development" />
            <h2 className="colorChangeHeading">Custom WebApp Development</h2>
            <p>Turning your visions into dynamic digital realities</p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
          <div className="serviceOfferCard border">
            <img src={Frontend} alt="Frontend WebPage Development" />
            <h2 className="colorChangeHeading">Frontend WebPage Development</h2>
            <p>
              Elevating your online presence with captivating frontend design
            </p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
          <div className="serviceOfferCard border">
            <img src={WordPress} alt="Wordpress WebApp Development" />
            <h2 className="colorChangeHeading">Wordpress WebApp Development</h2>
            <p>Crafting Dynamic WordPress WebApps for Your Digital Success</p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
          <div className="serviceOfferCard border">
            <img src={Graphics} alt="Illustrative Graphic Design Solutions" />
            <h2 className="colorChangeHeading">
              Illustrative Graphic Design Solutions
            </h2>
            <p>
              Bringing your ideas to life with vibrant creativity and precision
            </p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
