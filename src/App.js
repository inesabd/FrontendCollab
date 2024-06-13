import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Page/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Page/HomePage';
import FormulairePage from './Page/FormulairePage';
import RelationPage from'./Page/RelationPage';

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "Form/", element: <FormulairePage /> },
    { path: "Relation/", element: <RelationPage /> },

     // { path: "Conn/", element: <AccountPage /> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
