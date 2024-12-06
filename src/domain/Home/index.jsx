import React from "react";
import { useNavigate } from "react-router-dom"; 

function Home() {
  const navigate = useNavigate(); // Hook to navigate to another page

  // Handle button click to redirect to To-Do
  const handleTryItOut = () => {
    navigate("/todo");
  };

  return (
    <div className="d-flex justify-content-center align-items-center mx-2 shadow" style={{minHeight:"90vh"}}>
      <div className="container rounded p-5 shadow-lg text-info theme-color">
        <h1 className="display-4 text-center mb-4">Welcome to My Website!</h1>
        <p className="lead text-center mb-4">
        Whether you're juggling tasks with the To-Do List, escaping to a new State and City, or diving into posts from the depths of the internet, we've got you covered. Organize your life, find new places, or just look like you're busy reading smart posts—all in one place!
        </p>
        <div className="text-center">
          <button className="btn btn-info btn-lg" onClick={handleTryItOut}>
            Try It Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
