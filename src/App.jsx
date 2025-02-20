import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainView from "./views/MainView/MainView";
import ProfileView from "./views/ProfileView/ProfileView";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
