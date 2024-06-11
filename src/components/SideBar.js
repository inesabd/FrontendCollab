// src/components/SideBar.js
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import './SideBar.css';
import { MdHistory } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { TbHeartSearch } from "react-icons/tb";
import { RiDraftLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);  

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-menu">
        <Link to="/" className="text-light text-decoration-none">
          <span className="fs-4">Menu</span>
        </Link>
        <FaBars onClick={toggleSidebar} />
      </div>
      <hr />
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/form" className="nav-link link-light">
            <AiFillEdit className="profile-icon" />
            <span>Publier une ressource </span>
          </Link>
        </li>
        <li>
          <Link to="/account-settings" className="nav-link link-light">
            <MdHistory className="profile-icon"/>
            <span>Liste de contact</span>
          </Link> 
        </li>
        <li className="nav-item">
          <Link to="/favorites" className="nav-link link-light">
            <TbHeartSearch className="profile-icon"/>
            <span>Ressources favorites</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/drafts" className="nav-link link-light">
            <RiDraftLine className="profile-icon"/>
            <span>Corbeille</span>
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
