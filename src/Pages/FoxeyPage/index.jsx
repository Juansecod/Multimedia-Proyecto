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
import coctail from '@/assets/foxey-drink-3.jpg';

import './FoxeyPage.css';

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
      { image: porter, title: 'Porter by Foxey', text: "Una cerveza artesanal oscura y elegante que desafía las expectativas con un amargor pronunciado que permanece en el paladar, recordándote que estás disfrutando de una bebida exótica y sabrosa. Su aroma discreto, con leves notas tostadas, anticipa la intensidad de lo que estás a punto de probar. Una cerveza negra única que no querrás dejar pasar." },
      { image: cuatroHermanos, title: 'Andor by Dogpi', text: "Desde una galaxia muy, muy lejana, Dogpi nos trae una cerveza que conquista los sentidos con su inconfundible sabor. Inspirada en el universo de Star Wars, esta creación galáctica combina el dulzor envolvente del chocolate caramelizado con la suavidad de la cebada cuidadosamente seleccionada. Cada sorbo es un viaje interestelar que te transporta más allá de los límites del paladar, directo a la galaxia de origen de Dogpi. Ideal para jedis del buen gusto y rebeldes cerveceros que buscan algo realmente único." },
      { image: coctail, title: 'Moscow Mule by Foxey', text: "Refrescante y con carácter, este coctel que nos trae Foxey despierta nuestros sentidos desde el primer trago. La intensidad del jengibre se fusiona con la frescura cítrica del limón y la suavidad del vodka, todo servido en su clásica presentación helada que lo hace irresistible. Es chispeante, atrevido y perfecto para esos momentos donde lo clásico se encuentra con lo salvajemente refrescante. Ideal para tardes calurosas, noches con ritmo y conversaciones que fluyen como el hielo en la copa." },
    ],
    factTitle: "Sabías que",
    factText: (<p>
      En Foxey, cada 4 de mayo se celebra el <span className='new-rocker-font' style={{fontSize: "20px"}}>Día de Star Wars</span> con un evento fuera de este mundo. En honor al famoso <span className='new-rocker-font' style={{fontSize: "20px"}}>“May the 4th be with you”</span>, se organiza un concurso cervecero en el que participan creaciones inspiradas en la saga, como la rebelde <span className='new-rocker-font' style={{fontSize: "20px"}}>Andor</span> o la poderosa <span className='new-rocker-font' style={{fontSize: "20px"}}>Anakin</span>, actual campeona. Así que ya sabes: agenda el próximo 4 de mayo, ven con tu mejor traje Jedi (o Sith), prueba estas cervezas intergalácticas y participa en un evento donde la Fuerza y la cebada, están contigo.
    </p>),
    cardImage: funFactFoxeyImage,
  };

  const barFooterProps = {
      backgroundColor: "#190f0f",
      instagram:"https://www.instagram.com/foxeypub",
      tiktok:"https://www.tiktok.com/@foxeypub",
      facebook:"https://www.facebook.com/foxeypub"
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
