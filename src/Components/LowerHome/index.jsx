import './LowerHome.css';
import { Link } from 'react-router-dom';

import LogoFoxey from '@/assets/foxey-logo.png';
import LogoLHOD from '@/assets/lhod-logo.png';
import LogoValhala from '@/assets/valhala-logo.png';
import LogoBantu from '@/assets/bantu-logo.png';

function LowerHome() {
  return (
    <div className='LowerHome'>
      <h2>Donde tomar Pilpsens</h2>
      <div className='BarLogos' style={{padding: "0px 20px"}}>
        <Link className='LogoWrapper' to="/Foxey">
          <img className='BarLogo' src={LogoFoxey} alt="Foxey" loading='lazy'/>
        </Link>
        <Link className='LogoWrapper' to="/LHOD">
          <img className='BarLogo' src={LogoLHOD} alt="LHOD" loading='lazy'/>
        </Link>
        <Link className='LogoWrapper' to="/Valhala">
          <img className='BarLogo' src={LogoValhala} alt="Valhala" loading='lazy'/>
        </Link>
        <Link className='LogoWrapper' to="/Bantu">
          <img className='BarLogo' src={LogoBantu} alt="Bantu" loading='lazy'/>
        </Link>
      </div>
    </div>
  );
}

export default LowerHome;
