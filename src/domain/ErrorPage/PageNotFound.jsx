import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function NotFound() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handle button click to redirect to the homepage
  const handleGoHome = () => {
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container rounded p-5 shadow-lg text-danger bg-light" style={{ maxWidth: "700px" }}>
        <h1 className="display-3 text-center mb-4">404</h1>
        <h2 className="text-center mb-4">Page Not Found</h2>
        <p className="lead text-center mb-4">
          Oops! It looks like the page you're looking for doesn't exist. The link may be broken or the page has been moved.
        </p>
        <div className="text-center">
          <button className="btn btn-danger btn-lg" onClick={handleGoHome}>
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
