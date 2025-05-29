import './BarFooter.css';
import ig from "../../assets/ig-logo.png";
import tt from "../../assets/tt-logo.png";
import fb from "../../assets/fb-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function BarFooter({ backgroundColor = '#000', instagram, tiktok, facebook }) {
  return (
    <div className='Barfooter' style={{ backgroundColor }}>
      <h2>Visita sus redes</h2>
      <div className='Redes'>
        {tiktok && (
          <a href={tiktok} target="_blank" rel="noopener noreferrer" style={{display: "flex", width: "64px", height: "64px", backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: backgroundColor}}>
            <FontAwesomeIcon icon={faTiktok} style={{fontSize:"32px"}} />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" style={{display: "flex", width: "64px", height: "64px", backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: backgroundColor}}>
            <FontAwesomeIcon icon={faInstagram} style={{fontSize:"32px"}} />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" style={{display: "flex", width: "64px", height: "64px", backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: backgroundColor}}>
            <FontAwesomeIcon icon={faFacebook} style={{fontSize:"32px"}} />
          </a>
        )}
      </div>
    </div>
  );
}

export default BarFooter;
