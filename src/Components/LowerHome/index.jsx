import './LowerHome.css'
import LogoFoxey from '../../assets/foxey-logo.png'
import LogoLHOD from '../../assets/lhod-logo.png'
import LogoValhala from '../../assets/valhala-logo.png'
import LogoBantu from '../../assets/bantu-logo.png'

function LowerHome(){
  return (
    <div className='LowerHome'>
        <h2>Donde tomar Polas</h2>
        <div className='BarLogos'>
            <img className='BarLogo' src={LogoFoxey} alt="" />
            <img className='BarLogo' src={LogoLHOD} alt="" />
            <img className='BarLogo' src={LogoValhala} alt="" />
            <img className='BarLogo' src={LogoBantu} alt="" />
        </div>
    </div>
  );
}

export default LowerHome;