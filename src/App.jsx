import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts/Layouts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layouts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
