import { Route, Routes } from "react-router-dom";

import "./style/App.css";
import "./style/Navbar.css";
import "./style/Sidebar.css";
import "./style/Projects.css";
import "./style/ContactForm.css";
import "./style/Modal.css";

import Home from "./Routes/Home";
import Projects from "./Routes/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
