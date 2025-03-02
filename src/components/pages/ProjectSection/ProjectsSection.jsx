import "./ProjectsSection.css";
import SpotifyProject from "../../../assets/SpotifyProject.png";
import HospitallineProject from "../../../assets/HospitallineProject.png";
import PassGaurdProject from "../../../assets/PassGaurdProject.png";
import PortfolioProject from "../../../assets/PortfolioProject.png";
import WeatherAppProject from "../../../assets/WeatherAppProject.png";

const projects = [
  {
    title: "Website Developer Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience as a web developer.",
    link: "#",
    github: "https://github.com/yourusername/portfolio",
    image: PortfolioProject,
  },
  {
    title: "Hospitalline | Hospital Management System",
    description:
      "A comprehensive hospital management system designed to streamline administrative and patient management tasks.",
    link: "https://junaidahmed404.github.io/Hospitalline/",
    github: "https://github.com/yourusername/hospitalline",
    image: HospitallineProject,
  },
  {
    title: "Spotify Music Player Clone",
    description:
      "A feature-rich music player inspired by Spotify, offering a sleek, intuitive interface.",
    link: "https://spotify.freewebhostmost.com/",
    github: "https://github.com/yourusername/spotify-clone",
    image: SpotifyProject,
  },
  {
    title: "PassGuard | Password Manager",
    description:
      "A secure and user-friendly password manager designed to safely store and manage passwords.",
    link: "#",
    github: "https://github.com/yourusername/passguard",
    image: PassGaurdProject,
  },
  {
    title: "Weather Application",
    description:
      "A dynamic weather application that provides real-time weather updates for any location.",
    link: "#",
    github: "https://github.com/yourusername/weather-app",
    image: WeatherAppProject,
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h1 className="colorChangeHeading">My Projects</h1>
      <div className="projectsContainer border">
        {projects.map((project, index) => (
          <div className="projectCard border" key={index}>
            <img src={project.image} alt={project.title} className="projectImage" />
            <h2 className="colorChangeHeading">{project.title}</h2>
            <p>{project.description}</p>
            <div className="btn-container">
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-visit">
    Visit Project
  </a>
  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
    GitHub Repo
  </a>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
