import "./AboutMeSection.css";
function AboutMeSection() {
  return (
    <section id="aboutMe" className="section">
      <h1 className="colorChangeHeading">About Me</h1>
      <div className="introAboutMe border">
        <p>
          Hey there! I&apos;m <strong>Junaid Ahmed</strong>, a passionate MERN
          Stack web developer with a flair for crafting captivating digital
          experiences. Proficient in HTML5, CSS3, JavaScript/ES5/ES6, and a
          plethora of advanced web concepts, I specialize in building visually
          stunning and user-friendly websites. But that&apos;s just the
          beginning!
        </p>
        <p>
          I don&apos;t just stop at MERN - I&apos;m also your go-to guy for
          WordPress development, turning your ideas into dynamic and scalable
          websites. When it comes to design, I wield the power of Adobe
          Illustrator and Picsart, infusing creativity into every pixel.
        </p>
        <p>
          But wait, there&apos;s more! I&apos;m well-versed in cutting-edge
          technologies like NextJS and AuthJS, enhancing the functionality and
          security of your projects. Whether it&apos;s crafting sleek UIs with
          Bootstrap and Tailwind, managing complex state with Redux, or ensuring
          seamless collaboration with Git and GitHub, I&apos;ve got you covered.
        </p>

        <button className="btn--primary btn btnBtn boxShadow">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

export default AboutMeSection;
