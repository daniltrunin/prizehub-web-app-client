import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainView from "./views/MainView/MainView";
import ProfileView from "./views/ProfileView/ProfileView";

function App() {
  /* если есть данные в sessionStorage, то открывает default, если нет, то открывает /profile
   if (!sessionStorage.getItem("username")) {
   return <div style={{ marginTop: "50px" }}>загрузка...</div>;
   } */

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              sessionStorage.getItem("username") ? (
                <MainView />
              ) : (
                <Navigate to="/profile" />
              )
            }
          />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
