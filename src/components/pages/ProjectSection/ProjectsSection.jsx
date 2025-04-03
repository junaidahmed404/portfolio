import { useState } from "react";
import "./ProjectsSection.css";
import SpotifyProject from "../../../assets/SpotifyProject.png";
import PassGaurdProject from "../../../assets/PassGaurdProject.png";
import WeatherAppProject from "../../../assets/WeatherAppProject.png";
import P1I1 from "../../../assets/PortfolioProject/Portfolio_HomeSec.png";
import P1I2 from "../../../assets/PortfolioProject/Portfolio_ServicesSec.png";
import P1I3 from "../../../assets/PortfolioProject/Portfolio_ProjectsSec.png";
import P1I4 from "../../../assets/PortfolioProject/Portfolio_ContactSec.png";
import HospitallineProject from "../../../assets/HMSProject/HospitallineProject.png";
import P2I1 from "../../../assets/HMSProject/HMS_MainPage.png";
import P2I2 from "../../../assets/HMSProject/HMS_Invoice.png";
import P2I3 from "../../../assets/HMSProject/HMS_PatientProfilePage.png";
import P2I4 from "../../../assets/HMSProject/HMS_ContactPpage.png";
import P3I1 from "../../../assets/AuthProject/LoginPage.png";
import P3I2 from "../../../assets/AuthProject/SignUpPage.png";
import P3I3 from "../../../assets/AuthProject/ForgetPassPage.png";
import P3I4 from "../../../assets/AuthProject/PassEmailSent.png";
import P3I5 from "../../../assets/AuthProject/ResetPassPage.png";
import P3I6 from "../../../assets/AuthProject/VerifyEmailPage.png";
import P3I7 from "../../../assets/AuthProject/DashBoardPage.png";

const projects = [
  {
    title: "Authentication Project",
    description:
      "A standalone MERN-based authentication service implementing JWT and role-based access control. This project highlights my expertise in authentication security, user management, and state handling.",
    github: "https://github.com/junaidahmed404/auth-service",
    images: [P3I1, P3I2, P3I3, P3I4, P3I5, P3I6, P3I7], // Replace with real images
  },
  {
    title: "Website Developer Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience as a web developer. Designed with a sleek UI, smooth navigation, and a responsive layout to provide an engaging user experience.",
    github: "https://github.com/junaidahmed404/portfolio",
    images: [P1I1, P1I2, P1I3, P1I4], // Replace with real images
  },
  {
    title: "Hospitalline | Hospital Management System",
    description:
      "A full-fledged hospital management system designed to streamline administrative processes, patient records, and appointment scheduling. This project demonstrates my ability to build scalable, database-driven web applications with complex user roles.",
    github: "https://junaidahmed404.github.io/Private_Repo_Notice/",
    images: [HospitallineProject, P2I1, P2I2, P2I3, P2I4], // Replace with real images
  },
  {
    title: "Spotify Music Player Clone",
    description:
      "A feature-rich Spotify-inspired music player with a modern UI, playlist management, and audio playback functionality. This project showcases my expertise in full-stack JavaScript development, including API integration and frontend interactivity.",
    github: "https://github.com/junaidahmed404/spotify_clone",
    images: [SpotifyProject], // Replace with real images
  },
  {
    title: "PassGuard | Password Manager",
    description:
      "A secure and intuitive password manager that encrypts and safely stores user credentials. This project highlights my ability to work with frontend design, authentication mechanisms, and database management (MongoDB or LocalStorage).",
    github: "https://github.com/junaidahmed404/PassGaurd",
    images: [PassGaurdProject], // Replace with real images
  },
  {
    title: "Weather Application",
    description:
      "A real-time weather application that fetches and displays weather data based on user location. This project showcases my ability to work with APIs, manage dynamic UI updates, and handle real-time data fetching.",
    github: "https://github.com/yourusername/weather-app",
    images: [WeatherAppProject], // Replace with real images
  },
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Start from first image
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === selectedProject.images.length ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="section">
      <h1 className="colorChangeHeading">My Projects</h1>
      <div className="projectsContainer border">
        {projects.map((project, index) => (
          <div className="projectCard border" key={index}>
            <img
              src={project.images[0]}
              alt={project.title}
              className="projectImage"
            />
            <h2 className="colorChangeHeading">{project.title}</h2>
            <p>{project.description}</p>
            <div className="btn-container">
              <button
                onClick={() => openModal(project)}
                className="btn btn-visit"
              >
                Preview Project
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedProject.images[currentImageIndex]}
              alt="Project Screenshot"
              className="modal-image"
            />
            <div className="modal-btns">
              <button className="prev-btn" onClick={prevImage}>
                ❮ Prev
              </button>
              <button className="next-btn" onClick={nextImage}>
                Next ❯
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
