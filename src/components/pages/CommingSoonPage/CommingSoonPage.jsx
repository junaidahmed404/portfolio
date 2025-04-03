import "./CommingSoonPage.css";
import { Link } from "react-router-dom"; // If using React Router for navigation

function ComingSoon() {
  return (
    <div className="comingSoonPage">
      <div className="comingSoonContent">
        <h1 className="colorChangeHeading">Coming Soon</h1>
        <h2>We are launching soon!</h2>
        <p>
          Our website is under construction. We&apos;ll be here soon with our new
          awesome website. Stay tuned!
        </p>
        <Link to="/" className="btn--primary btn btnBtn boxShadow">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
