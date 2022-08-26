import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home/Home.js";
import About from "./Components/Pages/About/About.js";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage.js";
import NavBar from "./Components/NavBar/NavBar.js"
import Footer from './Components/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
