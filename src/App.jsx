import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/home/Homes";
import About from "./components/AboutSection/About";
import Testimonial from "./components/TestimonialSection/Testimonial";
import Footer from "./components/FooterSection/Footer";
import Map from "./components/FooterSection/Map";
import Message from "./components/MessageSection/Message";
import Treatments from "./components/Modal/Treatments";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <Treatments />
      <Testimonial />
      <Message />
      <Map />
      <Footer />
    </>
  );
}

export default App;
