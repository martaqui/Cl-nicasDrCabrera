import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
