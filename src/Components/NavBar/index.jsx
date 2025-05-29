import LogoNegro from '@/assets/logo-negro.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavBar({ active, backgroundColor = '#000' }) {
  const [linkBar, setLinkBar] = useState(null);
  const [visible, setVisible] = useState(false);
  const barLinks = ["Foxey", "LHOD", "Bantu"];

  useEffect(() => {
    const randomLink = barLinks[Math.floor(Math.random() * barLinks.length)];
    setLinkBar(randomLink);
  }, []);

  return (
    <div className='Navbar' style={{ backgroundColor }}>
      <div className='Marca'>
        <img className='Logo' src={LogoNegro} alt="Logo Pagina" />
        <h2>Du Rock on <br /> Medellin</h2>
      </div>
      <div className='Navegacion'>
        <Link to="/" className={`NavLink ${active == "HOME" ? "Active" : ""}`}><h3>Home</h3></Link>
        <div 
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <Link to={`/${linkBar}`} className={`NavLink Bares ${active == "BARES" ? "Active" : ""}`}><h3 >Bares</h3></Link>
          {visible && (
            <div className="HintTooltip">
              Averigua dónde será tu próximo parche 🎸
            </div>
          )}
        </div>
        <Link to="/History" className={`NavLink ${active == "HISTORY" ? "Active" : ""}`}><h3>Historia</h3></Link>
      </div>
    </div>
  );
}
export default NavBar;
