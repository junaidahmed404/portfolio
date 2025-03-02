import "./ErrorPage.css";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

function ErrorPage() {
  return (
    <div className="errorPage">
      <div className="errorContent">
        <h1 className="colorChangeHeading">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          Sorry, the page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <Link to="/" className="btn--primary btn btnBtn boxShadow">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
