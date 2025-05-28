import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FoxeyPage from './Pages/FoxeyPage';
import LHODPage from './Pages/LHODPage';
import BantuPage from './Pages/BantuPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Foxey" element={<FoxeyPage />} />
        <Route path="/LHOD" element={<LHODPage />} />
        <Route path="/Bantu" element={<BantuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
