import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { loadEnv } from "vite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
  projectId:import.meta.env.VITE_PROJECT_ID,
  appId:import.meta.env.VITE_APP_ID,
  reactAppId: import.meta.env.VITE_VITE_ID
};

function App() {
  console.log(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <h1>Ynov Doctolib</h1>
    </div>
  )
}

export default App
