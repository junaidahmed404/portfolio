import { useState } from "react";
import "./ProjectsSection.css";
import SpotifyProject from "../../../assets/SpotifyProject.png";
import PassGaurdProject from "../../../assets/PassGaurdProject.png";
import WeatherAppProject from "../../../assets/WeatherAppProject.png";
import DummyImage1 from "../../../assets/R1.jpg"; // Replace with real images
import DummyImage2 from "../../../assets/Graphics.jpg"; // Replace with real images
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
      "A standalone MERN authentication service with JWT and role-based access control.",
    github: "https://github.com/yourusername/portfolio",
    images: [P3I1, P3I2, P3I3, P3I4, P3I5, P3I6, P3I7], // Replace with real images
  },
  {
    title: "Website Developer Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience as a web developer.",
    github: "https://github.com/yourusername/portfolio",
    images: [P1I1, P1I2, P1I3, P1I4], // Replace with real images
  },
  {
    title: "Hospitalline | Hospital Management System",
    description:
      "A comprehensive hospital management system designed to streamline administrative and patient management tasks.",
    github: "https://github.com/yourusername/hospitalline",
    images: [HospitallineProject, P2I1, P2I2, P2I3, P2I4], // Replace with real images
  },
  {
    title: "Spotify Music Player Clone",
    description:
      "A feature-rich music player inspired by Spotify, offering a sleek, intuitive interface.",
    github: "https://github.com/yourusername/spotify-clone",
    images: [SpotifyProject, DummyImage1, DummyImage2], // Replace with real images
  },
  {
    title: "PassGuard | Password Manager",
    description:
      "A secure and user-friendly password manager designed to safely store and manage passwords.",
    github: "https://github.com/yourusername/passguard",
    images: [PassGaurdProject, DummyImage1, DummyImage2], // Replace with real images
  },
  {
    title: "Weather Application",
    description:
      "A dynamic weather application that provides real-time weather updates for any location.",
    github: "https://github.com/yourusername/weather-app",
    images: [WeatherAppProject, DummyImage1, DummyImage2], // Replace with real images
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
