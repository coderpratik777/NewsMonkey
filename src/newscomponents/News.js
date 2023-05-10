import React from "react";
import Clock from "./Clock";
import "./clock.css";
import "./navbar.css";
import Nnavbar from "./Nnavbar";
import Newsitem from "./Newsitem";
import { Router,Routes,Route } from "react-router-dom";


function News() {
  return (
    <>
    <Clock/>
    <Nnavbar/>
    <Routes>
    
      <Route path="/" element={<Newsitem key="/" pageSize={6} category="general" country="in"/>}></Route>
      <Route  path="/cricket" element={<Newsitem key="cricket" pageSize={6} category="cricket" country="in"/>}></Route>
      <Route  path="/techno" element={<Newsitem key="politics" pageSize={6} category="technology" country="in"/>}></Route>
      <Route  path="/science" element={<Newsitem key="science" pageSize={6} category="science" country="in"/>}></Route>
      <Route path="/entertainment" element={<Newsitem key="entertainment"  pageSize={6} category="entertainment" country="in"/>}></Route>
      <Route  path="/inter" element={<Newsitem key="inter" pageSize={6} category="general" country="us"/>}></Route>

    </Routes>
    </>
  );
}

export default News;
