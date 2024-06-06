import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Kurslar from "./Components/Kurslar/Kurslar";
import Foundation from "./Components/Foundation/Foundation";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import Bloghero from "./Components/Bloghero/Bloghero";
import Xaptic1 from "./Components/Xaptic1/Xaptic1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Kurslar" element={<Kurslar />}></Route>
        <Route path="/foundation" element={<Foundation />}></Route> 
        <Route path="/About" element={<About />}></Route> 
        <Route path="/Bizningjamoa" element={<Team />}></Route> 
        <Route path="/Blog" element={<Blog />}></Route> 
        <Route path="/Blog" element={<Bloghero />}></Route> 
        <Route path="/Xaptic" element={<Xaptic1 />}></Route> 
      </Routes>
    </>
  );
}

export default App;
