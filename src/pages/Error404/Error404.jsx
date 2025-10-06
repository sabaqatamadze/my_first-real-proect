import "./Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error">
      <div className="link">
        <span className="home">Home</span> / <span>404-Error</span>
      </div>
      <div className="text">
        <p className="not-found">404 Not Found</p>
        <p className="back-to-home">
          Your visited page not found. You may go home page.
        </p>

        <Link to={"/"} className="back-home-page">
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default Error404;
