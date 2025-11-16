import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CaballerosList from './components/CaballerosList';
import CaballerosForm from './components/CaballerosForm';
import CaballerosDetail from './components/CaballerosDetail';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CaballerosList />} />
            <Route path="/crear" element={<CaballerosForm />} />
            <Route path="/editar/:nombre" element={<CaballerosForm />} />
            <Route path="/detalle/:nombre" element={<CaballerosDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
