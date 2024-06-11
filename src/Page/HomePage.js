// src/Page/HomePage.js
import React from 'react';
import Navbar from '../components/MyNavbarTT';
import Sidebar from '../components/SideBar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {/* Contenu principal de la page ici */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
