import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./App.css"; 
import StateSelector from "./domain/State-Selector/Index"; // component for selecting states based on the country
import Navbar from "./components/Navbar"; 
import Posts from "./domain/Post-Selector"; // component to display posts
import ToDo from "./domain/To-Do-List"; // component for the To-Do list
import Home from "./domain/Home"; // Home page of the website
import NotFound from "./domain/ErrorPage/PageNotFound"; // 404 page for invalid routes

function App() {
  return (
    <div>
      <Router>
        {/* Navbar appears on all pages */}
        <Navbar />
        {/* Define all the routes in the app */}
        <Routes>
          <Route path="/stateselector" element={<StateSelector />} /> 
          <Route path="/posts" element={<Posts />} /> 
          <Route path="/todo" element={<ToDo />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="*" element={<NotFound />} />  {/* Catch-all route for 404 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
