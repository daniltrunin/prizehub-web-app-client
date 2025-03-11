import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainView from "./views/MainView/MainView";
import ProfileView from "./views/ProfileView/ProfileView";

function App() {
  // если есть данные в sessionStorage, то открывает default, если нет, то открывает /profile
  const [session, setSession] = useState(false);

  useEffect(() => {
    let data = sessionStorage.getItem("username") === "true";
    setSession(data);
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!session ? <Navigate to="/profile" /> : <MainView />}
          />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
