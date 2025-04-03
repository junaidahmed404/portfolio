import "./ServicesSection.css";
import WordPress from "../../../assets/Wordpress.jpg";
import Custom from "../../../assets/R1.jpg";
import Frontend from "../../../assets/frontend_webdeveloper.jpg";
import Graphics from "../../../assets/fixing.jpeg";
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
            <h2 className="colorChangeHeading">Custom Web App Development</h2>
            <p>Need a tailor-made web solution? I build high-performance, scalable, and secure web applications to bring your ideas to life!</p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
          <div className="serviceOfferCard border">
            <img src={Frontend} alt="Frontend WebPage Development" />
            <h2 className="colorChangeHeading">Frontend Web Page Development</h2>
            <p>
            Looking for a stunning, user-friendly web page? I craft responsive and dynamic front-end designs that enhance user experience!
            </p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
          <div className="serviceOfferCard border">
            <img src={WordPress} alt="Wordpress WebApp Development" />
            <h2 className="colorChangeHeading">WordPress Web App Development</h2>
            <p>Want a powerful WordPress web app? I create feature-rich, fast, and scalable WordPress solutions tailored to your business needs!</p>
            <a href={ContactMeSection}>
              {/* <button className="btn--primary btn btnBtn boxShadow">
                Get Started
              </button> */}
            </a>
          </div>
          <div className="serviceOfferCard border">
            <img src={Graphics} alt="Illustrative Graphic Design Solutions" />
            <h2 className="colorChangeHeading">
            Code Modification & Optimization
            </h2>
            <p>
            Already have code but need modifications? I can refine, optimize, or expand your existing codebase to improve functionality and performance!
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
