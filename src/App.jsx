// App.jsx
import React from 'react';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import Resume from './components/Resume';
import FrontendResume from './components/FrontendResume';

function App() {
  const pathname = window.location.pathname;
  if (pathname === '/resume') {
    return <Resume />;
  }
  if (pathname === '/frontendresume') {
    return <FrontendResume />;
  }

  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;