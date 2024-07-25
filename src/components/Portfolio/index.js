import React, { useState } from "react";
import "./index.css";
const Portfolio = () => {
  const [theme, setTheme] = useState("theme");

  const changeTheme = () => {
    setTheme(theme === "theme" ? "theme dark" : "theme");
  };
  return (
    <>
      <section className="banner">
        <header>
          <a href="#" className="logo">
            <span>My</span>Portfolio_
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>
        <div className="content">
          <h3>Hey, </h3>
          <h2>
            I am <span>Arun Raju</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error,
            et voluptatum, sequi possimus adipisci aliquam illo odio sapiente
            
          </p>
          <button>Hire me</button>
          <ion-icon name="chatbubbles-outline"></ion-icon>
          <button className="chat">Let's chats</button>
        </div>
        <img src="imgbg.jpeg" alt="" className="colors" />
        <ul className="profile">
          <li>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="theme" onClick={changeTheme}>
          <ion-icon name="moon-outline"></ion-icon>
          <ion-icon name="sunny-outline"></ion-icon>
          {/* <ion-icon name="flashlight-outline"></ion-icon> */}
        </div>
      </section>
    </>
  );
};
export default Portfolio;
