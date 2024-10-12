import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import D_HomePage from './pages/D_HomePage';
import D_ticker from './components/D_Ticker';
import D_IndoorPage from './pages/D_IndoorPage';
import D_FamilyPage from './pages/D_FamilyPage';
import D_KidsPage from './pages/D_KidsPage';
import D_OutdoorPage from './pages/D_OutdoorPage';
import D_FemalesPage from './pages/D_FemalesPage';
import D_MalesPage from './pages/D_MalesPage';
import D_BlogPage from './pages/D_BlogPage';
import D_ScrollProgress from './components/D_ScrollProgress';
import D_FixedScrollIcons from './components/D_FixedScrollIcons';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<D_HomePage />} />
        <Route path="/indoor" element={<D_IndoorPage />} />
        <Route path="/family" element={<D_FamilyPage />} />
        <Route path="/females" element={<D_FemalesPage />} />
        <Route path="/kids" element={<D_KidsPage />} />
        <Route path="/males" element={<D_MalesPage />} />
        <Route path="/outdoor" element={<D_OutdoorPage />} />
        <Route path="/blog" element={<D_BlogPage />} />
      </Routes>
      <D_ticker />
      <D_ScrollProgress />
      <D_FixedScrollIcons />
    </Router>
  );
};

export default App;
