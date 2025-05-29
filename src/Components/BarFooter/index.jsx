import './BarFooter.css';
import ig from "../../assets/ig-logo.png";
import tt from "../../assets/tt-logo.png";
import fb from "../../assets/fb-logo.png";

function BarFooter({ backgroundColor = '#000', instagram, tiktok, facebook }) {
  return (
    <div className='Barfooter' style={{ backgroundColor }}>
      <h2>Visita sus redes</h2>
      <div className='Redes'>
        {tiktok && (
          <a href={tiktok} target="_blank" rel="noopener noreferrer">
            <img className='LogoRedes' src={tt} alt="Twitter" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img className='LogoRedes' src={ig} alt="Instagram" />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img className='LogoRedes' src={fb} alt="Facebook" />
          </a>
        )}
      </div>
    </div>
  );
}

export default BarFooter;
