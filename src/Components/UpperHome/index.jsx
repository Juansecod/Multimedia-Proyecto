import { Link } from 'react-router-dom';
import HomeImg from '../../assets/Imagen-home.png';
import './UpperHome.css';

function UpperHome() {
  return (
    <div className='UpperHome'>
      <div className='HomeLeft'>
        <img className='Img' src={HomeImg} alt="Nose" />
      </div>
      <div className='HomeRight'>
        <h1>El Rock en Medellin</h1>
        <p className='Text'>
          En medio de la violencia de los años 80 en Medellín, surgió una escena vibrante de rock y metal que sirvió como escape para muchos jóvenes. Bandas como
          <span className="Bold"> Kraken, Masacre y Parabellum </span>
          lideraron un movimiento contracultural marcado por sonidos extremos, letras oscuras y una fuerte crítica social. A pesar de los conflictos entre tribus urbanas y la represión, festivales como la
          <span className="Bold"> Batalla de las Bandas </span> y, más adelante,
          <span className="Bold"> Altavoz </span>, consolidaron a Medellín como una plaza clave para el rock colombiano. Hoy, la cultura rockera sigue viva en bares y espacios donde se mezclan generaciones, manteniendo el legado del
          <span className="BoldRed"> “Metal Medallo” </span>
          y su espíritu rebelde.
        </p>
        <Link to="/History">
          <button className='Button'>Conocer Más</button>
        </Link>
      </div>
    </div>
  );
}

export default UpperHome;
