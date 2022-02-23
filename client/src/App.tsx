import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Navbar,
} from "./components";
import "./common.scss";

const App = function () {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
