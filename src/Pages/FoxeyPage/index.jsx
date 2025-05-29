import BarLeft from '../../Components/BarLeft';
import BarRight from '../../Components/BarRight';
import NavBar from '../../Components/NavBar';
import BarFooter from '../../Components/BarFooter';

import funFactFoxeyImage from '@/assets/Foxey-fun-fact.jpg';
import foxeyCarrusel1 from '@/assets/foxey-carrusel-1.jpg';
import foxeyCarrusel2 from '@/assets/foxey-carrusel-2.jpg';
import foxeyCarrusel3 from '@/assets/foxey-carrusel-3.jpg';
import foxeyCarrusel4 from '@/assets/foxey-carrusel-4.jpg';
import foxeyCarrusel5 from '@/assets/foxey-carrusel-5.jpg';
import porter from '@/assets/foxey-drink-1.jpg';
import cuatroHermanos from '@/assets/foxey-drink-2.jpg';

import './FoxeyPage.css'

import valhala from '../../assets/valhala-logo.png';


function FoxeyPage() {
  const images = [foxeyCarrusel1, foxeyCarrusel2, foxeyCarrusel3, foxeyCarrusel4, foxeyCarrusel5];

  const text = <p style={{fontSize: "16px"}}>Bienvenido al lugar donde vas a encontrar tu <span className='new-rocker-font' style={{fontSize: "20px"}}>“Beer Spirit”</span>.
Aquí la cerveza no se toma, se vive. Tienen desde una pola negra intensa como tu alma, hasta una dorada brillante que parece embotellar el sol. Acá podras parchar con tus amigos, hablar de la vida, ver buen deporte y dejarte llevar por el mejor rock. <br /><br />Recuerda que aqui... <span className='rock-salt-font'>"Smells like beer spirit”</span></p>;

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
    separator: (<div className='Line-foxey'></div>),
    drinks: [
      { image: porter, title: 'Porter', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: cuatroHermanos, title: 'Los 4 Hermanos', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: valhala, title: 'Bebida 3', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
    ],
    factTitle: "Sabías que",
    factText: (<p>
      En Foxey, cada 4 de mayo se celebra el <span className='new-rocker-font' style={{fontSize: "20px"}}>Día de Star Wars</span> con un evento fuera de este mundo. En honor al famoso <span className='new-rocker-font' style={{fontSize: "20px"}}>“May the 4th be with you”</span>, se organiza un concurso cervecero en el que participan creaciones inspiradas en la saga, como la rebelde <span className='new-rocker-font' style={{fontSize: "20px"}}>Andor</span> o la poderosa <span className='new-rocker-font' style={{fontSize: "20px"}}>Anakin</span>, actual campeona. Así que ya sabes: agenda el próximo 4 de mayo, ven con tu mejor traje Jedi (o Sith), prueba estas cervezas intergalácticas y participa en un evento donde la Fuerza y la cebada, están contigo.
    </p>),
    cardImage: funFactFoxeyImage,
  };

  const barFooterProps = {
      backgroundColor: "#190f0f",
      instagram:"https://www.instagram.com/example",
      tiktok:"https://tiktok.com/example",
      facebook:"https://facebook.com/example"
    }


  return (
    <>
      <NavBar backgroundColor='#190f0f' active="BARES" />
      <div className="Container">
        <BarLeft {...barLeftProps} />
        <BarRight {...barRightProps} />
      </div>
      <BarFooter {...barFooterProps} />
    </>
  );
}

export default FoxeyPage;
