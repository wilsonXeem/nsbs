import "./App.css";

import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vote from "./components/Vote";
import Login from "./components/Login";
import Code from "./components/Code";

function App() {
  return (
    <div className="app">
      <div className="log">
        <div className="logo"></div>
        <h2 style={{textAlign:"center"}}>FACE OF NSBS MOUAU <br />by Comr. Malaky Arinze NSBS</h2>
      </div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/vote/:code" exact element={<Vote />} />
          <Route path="/admin/generate-code" exact element={<Code />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
