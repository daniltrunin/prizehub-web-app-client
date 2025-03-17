import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import MainView from "./views/MainView/MainView";
import ProfileView from "./views/ProfileView/ProfileView";

function App() {
  // если есть данные в sessionStorage, то открывает default, если нет, то открывает /profile
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    // более короткая запись варианта: let data = sessionStorage.getItem("username") !== null;
    let data = !!sessionStorage.getItem("username");
    setLoggedIn(data);
  }, []);

  if (loggedIn === null) {
    return <div style={{ marginTop: "50px" }}>Загрузка...</div>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <MainView /> : <Navigate to="/profile" />}
          />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
