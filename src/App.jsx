import "./App.css";

import Header from "./components/common/Header/Header";
import Sidebar from "./components/common/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
