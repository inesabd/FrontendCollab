// import React, { useState } from 'react';
// import { Nav, NavDropdown } from 'react-bootstrap';
// import { FaBars, FaHome, FaShoppingCart, FaTachometerAlt } from 'react-icons/fa';
// import { IoIosContact } from 'react-icons/io';
// import './SideBar.css';

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = () => setShowModal(!showModal);
//   const toggleSidebar = () => setCollapsed(!collapsed);
//   const handleLogout = () => {
//     // Logic to log out the user
//   };

//   return (
//     <div className={`sidebar d-flex flex-column vh-100 ${collapsed ? 'collapsed' : ''}`}>
//       <div className="sidebar-header d-flex justify-content-between align-items-center">
//         <FaBars onClick={toggleSidebar} />
//         <h5>Actions</h5>
//       </div>
//       <Nav className="flex-column">
//         <Nav.Item>
//           <Nav.Link href="#home">
//             <FaHome /> <span className="nav-text">Home</span>
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="#dashboard">
//             <FaTachometerAlt /> <span className="nav-text">Profil</span>
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="#orders">
//             <FaShoppingCart /> <span className="nav-text">Liste d'amis</span>
//           </Nav.Link>
//         </Nav.Item>
//         <NavDropdown title={<span><IoIosContact className="navbar-icon contact-icon" /> Utilisateur</span>} id="nav-dropdown">
//           <NavDropdown.Item onClick={toggleModal}>Compte</NavDropdown.Item>
//           <NavDropdown.Item onClick={handleLogout}>Déconnexion</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//       <Nav defaultActiveKey="/home" className="flex-column">
//         <Nav.Link href="/develop" className="sidebar-item">Publier une ressource</Nav.Link>
//         <Nav.Link href="/contact" className="sidebar-item">Liste de contact</Nav.Link>
//         <Nav.Link href="/favorites" className="sidebar-item">Ressources favorites</Nav.Link>
//         <Nav.Link href="/trash" className="sidebar-item">Corbeille</Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;
