import './BarLeft.css';
import Carousel from '../../Components/Carousel';

const BarLeft = ({ images, text, spotifyEmbed, mapEmbed, backgroundColor }) => {
  return (
    <div className="Barleft" style={{ backgroundColor }}>
      <Carousel images={images} />

      <p className="info-text">{text}</p>

      <div
        className="spotify-embed"
        dangerouslySetInnerHTML={{ __html: spotifyEmbed }}
      />

      <h2 className="map-title">Como Llegar</h2>

      <div
        className="map-embed"
        dangerouslySetInnerHTML={{ __html: mapEmbed }}
      />
    </div>
  );
};

export default BarLeft;
