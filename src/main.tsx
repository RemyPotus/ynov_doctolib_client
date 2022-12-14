import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Root from "./routes/root";

import Authentication from './pages/authentication';
import ErrorPage from './pages/error-page';
import MyAppointments from './pages/myAppointments';
import PractitionnerList from './pages/practitionnerList';

import './index.css'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
  projectId:import.meta.env.VITE_PROJECT_ID,
  appId:import.meta.env.VITE_APP_ID,
  reactAppId: import.meta.env.VITE_VITE_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firestore - Auth
export const auth = getAuth();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/my-appointments",
        element: <MyAppointments/>
      },
      {
        path: "/find-practitioner",
        element: <PractitionnerList/>
      },
      /*
      {
        path: "/take-appointment",
        element: <p>Take an appointment</p>
      }
      */
    ]
  },
  {
    path: "/auth",
    element:<Authentication/>,
  },
]);
//  import App from './App'   <App />
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
