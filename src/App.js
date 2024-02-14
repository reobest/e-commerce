import React from 'react';
import './App.css';
import AudioGear from './components/AudioGear';
import Home from './pages/Home';
import SelectedProduct from './components/SelectedProduct';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import DropDown from './components/DropDown';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './Context';

function App() {
  const context = useGlobalContext()
  const { showcart } = context
  return (
    <>
      <Router>
        {showcart && <DropDown />}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<SelectedProduct />} />
          <Route path='/:id/:id2' element={<ProductDetail />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <AudioGear />
        <Footer />
      </Router>
    </>
  );
}

export default App;



