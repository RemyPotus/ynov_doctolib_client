import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Root from "./routes/root";

import Auth from './pages/auth';
import ErrorPage from './pages/error-page';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/my-appointments",
        element: <p>My previous appointments</p>
      },
      {
        path: "/find-practitioner",
        element: <p>Find a pratctitionner</p>
      },
      {
        path: "/take-appointment",
        element: <p>Take an appointment</p>
      }
    ]
  },
  {
    path: "/auth",
    element:<Auth/>,
  },
]);
//  import App from './App'   <App />
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
