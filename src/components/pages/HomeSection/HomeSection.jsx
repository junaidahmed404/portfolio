import "./HomeSection.css";
import profile from "../../../assets/profilePng.png";
function HomeSection() {
  return (
    <section id="home" className="section">
      {/* LEFT Side */}
      <div className="left">
        <h1 className="colorChangeHeading codeColor">MERN Stack Developer</h1>
        <h2>Welcome to my Portfolio!</h2>
        <div className="socialMedia">
          <div className="platForm borderDark borderLight border">
            <a href="#contactMe">
              <div className="iconName">
                <h3>E-Mail</h3>
              </div>
            </a>
          </div>
          <div className="platForm borderDark borderLight border">
            <a
              href="https://www.linkedin.com/in/junaidahmed404/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconName">
                <h3>LinkedIn</h3>
              </div>
            </a>
          </div>
          <div className="platForm borderDark borderLight border">
            <a
              href="https://github.com/junaidahmed404"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconName">
                <h3>Github</h3>
              </div>
            </a>
          </div>
          <div className="platForm borderDark borderLight border">
            <a
              href="https://x.com/junaidahmed_98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconName">
                <h3>Twitter</h3>
              </div>
            </a>
          </div>
          <div className="platForm borderDark borderLight border">
            <a
              href="https://web.facebook.com/Junaidahmedx98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconName">
                <h3>Facebook</h3>
              </div>
            </a>
          </div>
          <div className="platForm borderDark borderLight border">
            <a
              href="https://www.instagram.com/junaidahmedx98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconName">
                <h3>Instagram</h3>
              </div>
            </a>
          </div>



        </div>
        <button
          className="btn btn--primary hoverOver boxShadow"
          onClick={() => {
            window.location.href = "#projects";
          }}
        >
          Take a Tour of My Projects
        </button>
        <div className="Numbers colorChangeHeading">
          <div className="experienceCount border">
            <span className="count"> 03+ </span>
            <span className="text"> Year Of Experience </span>
          </div>
          <div className="projectCount border">
            <span className="count"> 12 </span>
            <span className="text"> Projects </span>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="right">
        <div className="profilePic">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
