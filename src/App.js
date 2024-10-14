import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Offers />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
