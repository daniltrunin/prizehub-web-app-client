import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./views/Main/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
