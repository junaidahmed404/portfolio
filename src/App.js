import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts/Layouts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import ComingSoon from "./components/pages/CommingSoonPage/CommingSoonPage";

const App = () => {
  return (
    <Router basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Layouts />} />
        <Route path="/coming-soon" element={<ComingSoon/>} /> {/* Added Coming Soon Page */}
        <Route path="*" element={<ErrorPage />} /> {/* Fixed syntax error */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
