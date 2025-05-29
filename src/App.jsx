import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './Pages/HomePage';
import HistoryPage from './Pages/HistoryPage';
import FoxeyPage from './Pages/FoxeyPage';
import LHODPage from './Pages/LHODPage';
import BantuPage from './Pages/BantuPage';
import ValhalaPage from './Pages/ValhalaPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/Foxey" element={<FoxeyPage />} />
        <Route path="/LHOD" element={<LHODPage />} />
        <Route path="/Bantu" element={<BantuPage />} />
        <Route path="/Valhala" element={<ValhalaPage />} />    
      </Routes>
    </Router>
  );
}

export default App;
