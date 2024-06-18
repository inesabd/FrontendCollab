import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Page/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Page/HomePage';
import FormulairePage from './Page/FormulairePage';
import RelationPage from './Page/RelationPage';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },  // Route par défaut pour la page de login
    { path: "/login", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/formulaire", element: <FormulairePage /> },
    { path: "/relation", element: <RelationPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
