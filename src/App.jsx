// App.jsx
import React from 'react';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Homepage />
      <Footer />
    </RecoilRoot>
  );
}

export default App;