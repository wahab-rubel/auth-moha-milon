import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'layout',
        element: <Layout></Layout>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </StrictMode>,
)
