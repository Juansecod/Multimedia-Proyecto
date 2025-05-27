import LogoNegro from '../../assets/logo-negro.png';
import './NavBar.css';

function NavBar({ backgroundColor = '#000' }) {
  return (
    <div className='Navbar' style={{ backgroundColor }}>
      <div className='Marca'>
        <img className='Logo' src={LogoNegro} alt="Logo Pagina" />
        <h2>Du Rock on <br /> Medellin</h2>
      </div>
      <div className='Navegacion'>
        <h3>Home</h3>
        <h3>Bares</h3>
        <h3>Historia</h3>
      </div>
    </div>
  );
}
export default NavBar;
