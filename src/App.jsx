import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainView from "./views/MainView/MainView";
import ProfileView from "./views/ProfileView/ProfileView";

function App() {
  // если есть данные в sessionStorage, то открывает default, если нет, то открывает /profile
  const [session, setSession] = useState(null);

  useEffect(() => {
    // более короткая запись варианта: let data = sessionStorage.getItem("username") !== null;
    let data = !!sessionStorage.getItem("username");
    setSession(data);
  }, []);

  if (session === null) {
    return <div style={{ marginTop: "50px" }}>Загрузка...</div>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={session ? <MainView /> : <Navigate to="/profile" />}
          />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
