import React from 'react';
import LogoNegro from '../../assets/logo-negro.png'
import './NavBar.css'

function NavBar(){
  return (
    <div className='Navbar'>
        <div className='Marca'>
            <img className='Logo' src={LogoNegro} alt="Logo Pagina" />
            <h2>Du Rock on <br></br> Medellin</h2>
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