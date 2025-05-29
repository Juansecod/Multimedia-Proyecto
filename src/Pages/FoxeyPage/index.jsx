import BarLeft from '../../Components/BarLeft';
import BarRight from '../../Components/BarRight';
import NavBar from '../../Components/NavBar';

import foxey from '../../assets/foxey-logo.png';
import lhod from '../../assets/lhod-logo.png';
import bantu from '../../assets/bantu-logo.png';
import valhala from '../../assets/valhala-logo.png';
import BarFooter from '../../Components/BarFooter';

function FoxeyPage() {
  const images = [foxey, lhod, bantu, valhala];

  const text = <p style={{fontSize: "16px"}}>Bienvenido al lugar donde vas a encontrar tu <span className='new-rocker-font' style={{fontSize: "20px"}}>“Beer Spirit”</span>.
Aquí la cerveza no se toma, se vive. Tienen desde una pola negra intensa como tu alma, hasta una dorada brillante que parece embotellar el sol. Acá podras parchar con tus amigos, hablar de la vida, ver buen deporte y dejarte llevar por el mejor rock. <br />Recuerda que aqui... <span className='rock-salt-font'>"Smells like beer spirit”</span></p>;

  const spotifyEmbed = `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4CeeEOM32jQcH3eN9Q2dGj?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

  const mapEmbed = `
    <div style="max-width:100%;overflow:hidden;color:red;width:100%;height:400px;">
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
    backgroundColor: "#190f0f",
  };

    const barRightProps = {
    title: "Foxey",
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
      backgroundColor: "#190f0f",
      instagram:"https://www.instagram.com/example",
      tiktok:"https://tiktok.com/example",
      facebook:"https://facebook.com/example"
    }


  return (
    <>
      <NavBar backgroundColor='#190f0f' />
      <div className="Container">
        <BarLeft {...barLeftProps} />
        <BarRight {...barRightProps} />
      </div>
      <BarFooter {...barFooterProps} />
    </>
  );
}

export default FoxeyPage;
