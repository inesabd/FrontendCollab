import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Page/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Page/HomePage';

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    // { path: "Form/", element: <FormulairePage /> },
    // { path: "Conn/", element: <AccountPage /> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
