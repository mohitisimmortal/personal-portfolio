// App.jsx
import React from 'react';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import Resume from './components/resume/resume';

function App() {
  const pathname = window.location.pathname;
  if (pathname === '/resume') {
    return <Resume />;
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