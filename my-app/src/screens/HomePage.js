import React from "react";
import HomePageImage from "../utils/HomePageImage.jpg";
import "./HomePage.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="Container-homePage">
      <p className="Text-container">
        Start the test to determine your dermatological disease!
      </p>
      <div className="Image-container">
        <img
          src={HomePageImage}
          className="Image"
          style={{
            borderRadius: "50%",
            height: "600px",
          }}
        />
      </div>
      <div className="Button-container">
        <Button title="START" onClick={() => navigate("TestPage")} />
      </div>
    </div>
  );
}

export default HomePage;
