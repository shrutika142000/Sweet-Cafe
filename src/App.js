import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Offers />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
