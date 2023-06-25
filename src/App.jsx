import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Preprocessing from "./Components/Preprocessing";
import Ice from "./Components/Ice";
import Fish from "./Components/Fish";
import Cephalods from "./Components/Cephalods";
import Crust from "./Components/Crust";
import Mollus from "./Components/Mollus";
import Contact from "./Components/Contact";



function App() {
  return (
    <>
    <Routes>
  <Route path="/" element = {<Home />} />
  <Route path="/About" element = {< About/>} />
  <Route path="/Preprocessing" element = {< Preprocessing/>} />
  <Route path="/Ice" element = {< Ice/>} />
  <Route path="/Fish" element = {< Fish/>} />
  <Route path="/Cephalods" element = {< Cephalods/>} />
  <Route path="/Crust" element = {< Crust/>} />
  <Route path="/Mollus" element = {< Mollus/>} />
  <Route path="/Contact" element = {< Contact/>} />
  </Routes>
    </>
  );
}

export default App;
