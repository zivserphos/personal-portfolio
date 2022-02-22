import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from '../../client2.0/src/components';
import { Navbar } from './components';
import './common.scss';

const App = () => (
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

export default App;


