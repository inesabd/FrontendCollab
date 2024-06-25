import React from 'react';
import MyNavbarTT from '../components/MyNavbarTT';
import Sidebar from '../components/SideBar';
import PostCreator from '../components/PostCreator';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <MyNavbarTT />
      <div className="d-flex">
        <Sidebar />
        <div className="content flex-grow-1 p-3">
          <PostCreator />
        </div>
      </div>
    </>
  );
};

export default HomePage;