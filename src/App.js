import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from './components/Header/Header.js';
// import Home from './components/Home/Home';
import Page from "./components/Page/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <h1> Bem vindo ao Universo</h1>
          <span>Explore a extensão tridimensional sem limites</span>

          <a href={<Page />}>Explore</a>
          {/* <Routes>
            <Route path="/page" element={<Page />} />
          </Routes> */}

          <p className="">
            "Em algum lugar, algo incrível está esperando para ser descoberto."
          </p>
          <p>Carl Sagan</p>
        </section>
      </div>
    </Router>
  );
}

export default App;
