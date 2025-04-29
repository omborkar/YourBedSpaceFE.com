import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import './App.css'; // Link to the separate CSS file for better styling
import Profile from './Profile'; // Import the new Profile component
import PostBedSpace from './PostBedSpace'; // Import the PostBedSpace component

const Home = () => (
  <div className="container" id="home-page-x-container">
    <h1 className="title">Welcome to BedSpace Booking</h1>
    <h5 className="titleQuote">"Welcome to BedSpace Booking! Leave the bed spaces to us <br></br> focus on whatever task you’re here for, and know that we’re always here like family, ready to support you. You’re never alone in this!"</h5>
    <p className="subtitle">Find and book affordable bed spaces easily.</p>
    <Link to="/bedspaces" className="cta-btn">View Available Bed Spaces</Link>
    <Link to="/post-bedspace" className="cta-btn">Help with Bed Spaces</Link>
  </div>
);

const BedSpaces = () => {
  const [bedSpaces, setBedSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/bedspaces")
      .then(response => response.json())
      .then(data => setBedSpaces(data))
      .catch(error => console.error("Error fetching bed spaces:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="section-title">Available Bed Spaces</h1>
      <ul className="bedspace-list">
        {bedSpaces.map((bedSpace, index) => (
          <li key={index} className="bedspace-item">
            <h2 className="bedspace-name">{bedSpace.name}</h2>
            <p className="bedspace-location">Location: {bedSpace.location}</p>
            <p className="bedspace-price">${bedSpace.price}/month</p>
            <Link to={`/bedspaces/${bedSpace.id}`} className="cta-btn">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BedSpaceDetails = () => {
  const { id } = useParams();
  const [bedSpace, setBedSpace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/bedspaces/${id}`)
      .then(response => response.json())
      .then(data => setBedSpace(data))
      .catch(error => console.error("Error fetching bed space details:", error));
  }, [id]);

  if (!bedSpace) return <p className="loading">Loading...</p>;

  return (
    <div className="container details-container">
      <h1 className="details-title">{bedSpace.name}</h1>
      <p className="details-location">Location: {bedSpace.location}</p>
      <p className="details-price">${bedSpace.price}/month</p>
      <button className="cta-btn book-btn">Book Now</button>
      <Link to="/bedspaces" className="back-link">Back to Listings</Link>
    </div>
  );
};

const App = () => (
  <Router>
    {/* Navigation Bar */}
    <nav className="navbar">
      <Link to="/" className="navbar-btn">🏠 Home</Link>
      <Link to="/bedspaces" className="navbar-btn">🛏️ Bed Spaces</Link>
      <Link to="/post-bedspace" className="navbar-btn">📝 Help with Bed Spaces</Link>
      <Link to="/profile" className="navbar-btn">👤 Profile</Link>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bedspaces" element={<BedSpaces />} />
      <Route path="/bedspaces/:id" element={<BedSpaceDetails />} />
      <Route path="/post-bedspace" element={<PostBedSpace />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;