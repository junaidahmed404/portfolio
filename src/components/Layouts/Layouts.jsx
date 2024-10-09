import AboutMeSection from "../pages/AboutSection/AboutSection";
import BlogSection from "../pages/BlogoSphere/BlogoSphere";
import HomeSection from "../pages/HomeSection/HomeSection";
import ProjectsSection from "../pages/ProjectSection/ProjectsSection";
import ServicesSection from "../pages/ServicesSection/ServicesSection";
import ContactUs from "../pages/ContactSection/ContactSection";
const Layouts = () => {
  return (
    <div>
      <HomeSection />
      <AboutMeSection />
      <ServicesSection />
      <BlogSection />
      <ProjectsSection />
      <ContactUs />
    </div>
  );
};

export default Layouts;
