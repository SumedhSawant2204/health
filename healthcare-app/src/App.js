import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Survey from "./components/Survey";
import HomePage from "./components/HomePage";
import SearchExercise from "./components/SearchExercises";
import Home2 from "./components/home2";
import ExerciseDetail from './components/ExerciseDetail';
import Footer from './components/Footer';
import Chat from "./components/Client/Chat";
import ConsultationPage from "./components/ConsultationPage";
import Video from "./components/VideoCall/Video";
import RoomPage from "./components/VideoCall/Room";
import GamesPage from "./components/GamesPage";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">HealthCare</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/searchexercises" element={<SearchExercise />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/consultationPage" element={<ConsultationPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/gamesPage" element={<GamesPage />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
