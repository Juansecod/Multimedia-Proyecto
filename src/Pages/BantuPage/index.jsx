import BarLeft from '../../Components/BarLeft';
import BarRight from '../../Components/BarRight';
import NavBar from '../../Components/NavBar';

import foxey from '../../assets/foxey-logo.png';
import lhod from '../../assets/lhod-logo.png';
import bantu from '../../assets/bantu-logo.png';
import valhala from '../../assets/valhala-logo.png';
import BarFooter from '../../Components/BarFooter';

import './BantuPage.css'

function BantuPage() {
  const images = [foxey, lhod, bantu, valhala];

  const text = `Aquí no vienes solo a tomar cerveza: vienes a revivir himnos eternos. Guitarras que lloran, voces que acarician y letras que aún laten fuerte. Nuestras cervezas artesanales son tan intensas como los solos que llenan el aire. Desde Led Zeppelin hasta  Bon Jovi, cada canción es un trago de nostalgia y rebeldía. Este no es un bar, es un escenario para el alma. Si el rock es tu refugio, acabas de encontrar tu hogar.`;

  const spotifyEmbed = `
    <iframe style="border-radius:12px" 
      src="https://open.spotify.com/embed/track/27xkOIER6uDLKALIelHylZ?utm_source=generator" 
      width="100%" height="152" frameBorder="0" allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
  `;

  const mapEmbed = `
    <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;">
      <div id="embed-map-canvas" style="height:100%; width:100%;max-width:100%;">
        <iframe style="height:100%;width:100%;border:0;" frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=foxey+pub&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
        </iframe>
      </div>
    </div>
  `;

    const barLeftProps = {
    images,
    text,
    spotifyEmbed,
    mapEmbed,
    backgroundColor: "#281e1e",
  };

    const barRightProps = {
    title: "Bantu",
    separator: (<div className="Line-bantu"></div>),
    drinks: [
      { image: foxey, title: 'Bebida 1', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: lhod, title: 'Bebida 2', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: valhala, title: 'Bebida 3', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
    ],
    factTitle: "Sabías que",
    factText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.',
    cardImage: bantu,
  };

      const barFooterProps = {
      backgroundColor: "#281e1e",
      instagram:"https://www.instagram.com/example",
      tiktok:"https://tiktok.com/example",
      facebook:"https://facebook.com/example"
    }

  return (
    <>
      <NavBar backgroundColor='#281e1e' />
      <div className="Container">
        <BarLeft {...barLeftProps} />
        <BarRight {...barRightProps} />
      </div>
      <BarFooter {...barFooterProps} />
    </>
  );
}

export default BantuPage;
