import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// Doctor data (you can replace with actual data or an API call)
const doctors = [
  { id: 1, name: "Dr. John Doe", image: "https://content.jdmagicbox.com/v2/comp/mumbai/k2/022pxx22.xx22.221219110022.k4k2/catalogue/dr-mayur-rabhadiya-s-orthocare-ghatkopar-west-mumbai-orthopaedic-doctors-1q6u7g11f7.jpg", chatCode: Math.floor(1000 + Math.random() * 9000) },
  { id: 2, name: "Dr. Jane Smith", image: "https://travancoremedicity.com/wp-content/uploads/2022/04/Dr-Sathiamma.jpg", chatCode: Math.floor(1000 + Math.random() * 9000) },
  { id: 3, name: "Dr. Alice Johnson", image: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png", chatCode: Math.floor(1000 + Math.random() * 9000) }
];

const ConsultationPage = () => {
    const navigate = useNavigate();
  return (
    <div className="consultation-page">
      <h2>Consult a Specialist</h2>
      <div className="doctor-cards-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p>Chat Code: <strong>{doctor.chatCode}</strong></p>
            <div className="button-container">
              <button className="chat-btn" onClick={() => navigate("/chat")}>Chat</button>
              <button className="video-btn" onClick={() => navigate("/video")}>Video</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationPage;
