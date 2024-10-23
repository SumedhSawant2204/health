import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Sample data for the graphs
const data = [
  { name: 'Stress Level', value: 75 },
  { name: 'Anxiety Level', value: 25 }
];

// Sample images for the cards (replace with your own image URLs or import statements)
const gameImage = 'https://img.freepik.com/premium-photo/vedio-games-illustration_1252102-47756.jpg'; // Replace with your image URL
const exerciseImage = 'https://assets.clevelandclinic.org/transform/26568096-7fcc-4713-898d-ca1ed6c84895/exerciseHowOften-944015592-770x533-1_jpg'; // Replace with your image URL
const consultImage = 'https://media.istockphoto.com/id/1291377838/vector/doctor-on-laptop-computer-screen-telemedicine-medical-consultation-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=7uQfQfXNmeXUNAph5zlzNpUAaaOABQcrlamUOr6-YQY='; // Replace with your image URL

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">HealthCare</div>
        <ul className="nav-links">
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button>Games</button></li>
          <li><button>Consult</button></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>
      
      

      <div className="charts-container">
        <h2>Stress and Anxiety Levels</h2>
        <div className="chart">
          <BarChart width={400} height={300} data={data}>
            <Tooltip />
            <Bar dataKey="value" fill="#1abc9c" />
          </BarChart>
        </div>
        <div className="chart">
          <PieChart width={400} height={300}>
            <Pie data={data} dataKey="value" outerRadius={100} fill="#1abc9c">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#1abc9c' : '#e74c3c'} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <div className="cards-container">
        <div className="card" onClick={() => navigate("/gamesPage")}>
          <img src={gameImage} alt="Games" className="card-image" />
          <h3>Games</h3>
        </div>
        <div className="card" onClick={() => navigate("/home2")}>
          <img src={exerciseImage} alt="Exercise" className="card-image" />
          <h3>Exercise</h3>
        </div>
        <div className="card" onClick={() => navigate("/consultationPage")}>
          <img src={consultImage} alt="Consultation" className="card-image" />
          <h3>Consultation</h3>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
