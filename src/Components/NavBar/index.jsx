import LogoNegro from '@/assets/logo-negro.png';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({ active, backgroundColor = '#000' }) {
  return (
    <div className='Navbar' style={{ backgroundColor }}>
      <div className='Marca'>
        <img className='Logo' src={LogoNegro} alt="Logo Pagina" />
        <h2>Du Rock on <br /> Medellin</h2>
      </div>
      <div className='Navegacion'>
        <Link to="/" className={`NavLink ${active == "HOME" ? "Active" : ""}`}><h3>Home</h3></Link>
        <Link to="/" className={`NavLink ${active == "BARES" ? "Active" : ""}`}><h3>Bares</h3></Link>
        <Link to="/History" className={`NavLink ${active == "HISTORY" ? "Active" : ""}`}><h3>Historia</h3></Link>
      </div>
    </div>
  );
}
export default NavBar;
