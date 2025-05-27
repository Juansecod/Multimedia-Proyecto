import './BarFooter.css';
import ig from "../../assets/ig-logo.png";
import tt from "../../assets/tt-logo.png";
import fb from "../../assets/fb-logo.png";

function BarFooter({ backgroundColor = '#000' }) {
  return (
    <div className='Barfooter' style={{ backgroundColor }}>

        <h2>Visita sus redes</h2>
        <div className='Redes'>
            <img className='LogoRedes' src={tt} alt="" />
            <img className='LogoRedes' src={ig} alt="" />
            <img className='LogoRedes' src={fb} alt="" />
        </div>
    </div>
  );
}
export default BarFooter;
