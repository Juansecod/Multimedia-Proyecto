import BarLeft from '../../Components/BarLeft';
import BarRight from '../../Components/BarRight';
import NavBar from '../../Components/NavBar';
import BarFooter from '../../Components/BarFooter';

import momo from '../../assets/Meme_invocando_anvorguesa.webp';

import houseCarrusel1 from '@/assets/house-demon-1.jpg';
import houseCarrusel2 from '@/assets/house-demon-2.jpg';
import houseCarrusel3 from '@/assets/house-demon-3.jpg';
import houseCarrusel4 from '@/assets/house-demon-4.png';
import houseCarrusel5 from '@/assets/house-demon-5.jpg';
import houseDrink1 from '@/assets/house-drink-1.jpg';
import houseDrink2 from '@/assets/house-drink-2.jpg';
import houseDrink3 from '@/assets/house-drink-3.jpg';


import "./LHODPage.css"

function LHODPage() {
  const images = [ houseCarrusel2, houseCarrusel3, houseCarrusel4, houseCarrusel5, houseCarrusel1];

  const text = <p>Bienvenido al <span className="new-rocker-font" style={{fontSize: "20px"}}>santuario del metal</span> en Medellín. Aquí no vienes a tomar una cerveza; vienes a sumergirte en un ritual de riffs infernales, cervezas que arden como lava y hamburguesas que desafían a los dioses. Este no es un bar común; es un santuario para los espíritus oscuros que encuentran en el metal su verdadera voz. Desde las profundidades del Ultra Metal hasta los ecos del black metal noruego, nuestras paredes resuenan con la historia de una ciudad que convirtió su caos en arte sonoro.</p>;

  const spotifyEmbed = `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4qjvr0qMFUo26SxwC4VygS?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

  const mapEmbed = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.184415085602!2d-75.6029875249825!3d6.23940862639945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442962aca3a4a7%3A0xa654e49e746b3c13!2sLa%20House%20Of%20Demons!5e0!3m2!1ses-419!2sco!4v1748571064787!5m2!1ses-419!2sco" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

    const barLeftProps = {
    images,
    text,
    spotifyEmbed,
    mapEmbed,
    backgroundColor: "#590C0C",
  };

    const barRightProps = {
    title: "La House of Demons",
    separator: (<div className="Line-LHOD"></div>),
    drinks: [
      { image: houseDrink1, title: 'La 4 Hermanos', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: houseDrink2, title: 'Erdinger', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: houseDrink3, title: 'Ave Satanas', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
    ],
    factTitle: "Sabías que",
    factText: (<p>
      La House of Demons nació como <span className='new-rocker-font' style={{fontSize: "20px"}}>Demon Fit</span>, un espacio pensado para metaleros que llevaban su espíritu guerrero al gimnasio. Pero algo más poderoso se estaba gestando. Nos dimos cuenta de que los verdaderos hijos del metal no solo buscaban levantar pesas: querían un templo donde pudieran levantar el alma al ritmo de riffs brutales, con una buena cerveza en la mano y comida digna del infierno. Aunque ahora es la catedral del metal en Medellín, la esencia fitness no murió: se convirtió en una línea de ropa exclusiva para guerreros del metal que también sudan hierro.
      </p>),
    cardImage: momo,
  };

    const barFooterProps = {
      backgroundColor: "#590C0C",
      instagram:"https://www.instagram.com/lahouseofdemonsofficial/",
      tiktok:"https://www.tiktok.com/@lahouseofdemons",
      facebook:"https://es-la.facebook.com/lahouseofdemons/"
    }

  return (
    <>
      <NavBar backgroundColor='#590C0C' active="BARES" />
      <div className="Container">
        <BarRight {...barRightProps} />
        <BarLeft {...barLeftProps} />
      </div>
      <BarFooter {...barFooterProps}
      />
    </>
  );
}

export default LHODPage;
