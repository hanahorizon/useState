import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState (false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <nav className="navbar">
      <div className="icon" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
    <div className={`sidebar  ${isOpen ? 'active' : ''} `}>
      
      <div className="content">
        <ul>
          <li><a href="#"> Home </a></li>
          <li><a href="#"> Overview </a></li>
          <li><a href="#"> Sensors </a></li>
          <li><a href="#"> Routes </a></li>
          <li><a href="#"> Logs </a></li>
          <li><a href="#"> Settings </a></li>
          <li><a href="#"> Profile </a></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
