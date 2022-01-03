import React from "react";
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Slider from './components/Slider.js'
import Variety from "./components/Variety";

function App() {
  return (
    <div id='home-section'>
    <Header />
    <br/>
    <Slider/>
    <Variety/>
    <Footer />
  </div>
  );
}

export default App;
