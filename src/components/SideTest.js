import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import {FaShoppingCart, FaBars } from 'react-icons/fa';
import { CiShoppingTag } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './SideTest.css';
import { useNavigate } from 'react-router-dom';

const SideTest = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <FaBars onClick={toggleSidebar} />
        {/* <h5>Menu</h5> */}
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/home" className="nav-link">
            <IoHomeOutline /> <span className="nav-text">Home</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profil" className="nav-link">
            <CgProfile /> <span className="nav-text"> Mon Profil</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/orders" className="nav-link">
            <IoPersonAddOutline /> <span className="nav-text">Liste d'amis</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
        <Link to="/orders" className="nav-link">
            <  CiShoppingTag /> <span className="nav-text">Mes Enregistrement </span>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideTest;
