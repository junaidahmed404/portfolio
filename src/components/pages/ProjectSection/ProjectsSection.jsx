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
      "A personal portfolio website showcasing my projects, skills, and experience as a web developer. Designed with a dark-themed aesthetic, it features interactive elements, a responsive layout, and seamless navigation. Built using technologies like HTML, CSS, JavaScript, and React, this portfolio highlights my expertise in front-end development and UI/UX design. Integrated with Web3Forms for a functional contact form and features SweetAlert2 for user feedback on email submissions.",
    link: "#",
    image: PortfolioProject,
  },

  {
    title: "Hospitalline | Hospital Management System",
    description:
      "A comprehensive hospital management system designed to streamline administrative and patient management tasks. Features include appointment scheduling, patient record management, staff management, and billing. Built using technologies like HTML, CSS, JavaScript, and integrated with a backend for handling data efficiently. The system is designed to improve workflow efficiency and provide an intuitive interface for both medical staff and administrators.",
    link: "https://junaidahmed404.github.io/Hospitalline/",
    image: HospitallineProject, // Image for this project
  },

  {
    title: "Spotify Music Player Clone",
    description:
      "A feature-rich music player inspired by Spotify, offering a sleek, intuitive interface for an enhanced music streaming experience. Key features include playlist creation, real-time song playback, search functionality, and responsive design. Built with modern technologies like HTML, CSS, JavaScript, and React, and integrated with APIs to deliver a dynamic web application. The UI is designed to mirror Spotify’s clean, minimalist aesthetic, ensuring a familiar and smooth user experience.",
    link: "https://spotify.freewebhostmost.com/",
    image: SpotifyProject, // Image for this project
  },

  {
    title: "PassGuard | Password Manager",
    description:
      "A secure and user-friendly password manager designed to safely store and manage passwords for multiple accounts. Key features include encryption, password generation, and seamless access across devices. Built with modern web technologies such as HTML, CSS, JavaScript, and integrated with encryption algorithms to ensure data security. The intuitive interface makes it easy for users to organize and retrieve their credentials, enhancing both convenience and security.",
    link: "link_to_your_project3",
    image: PassGaurdProject,
  },
  {
    title: "Weather Application",
    description:
      "A dynamic weather application that provides real-time weather updates for any location. Features include current temperature, weather conditions, forecasts, and a search functionality for cities around the globe. Built with HTML, CSS, JavaScript, and integrated with a weather API to fetch and display accurate data. The application offers a clean, responsive interface for an optimized user experience across devices.",
    link: "link_to_your_project5",
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image} // Dynamically set the image source
                alt={project.title}
                className="projectImage"
              />
              <h2 className="colorChangeHeading">{project.title}</h2>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
