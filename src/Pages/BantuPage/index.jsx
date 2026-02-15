import BarLeft from '../../Components/BarLeft';
import BarRight from '../../Components/BarRight';
import NavBar from '../../Components/NavBar';

import bantu1 from '@/assets/bantu-1.jpg';
import bantu2 from '../../assets/bantu-2.jpg';
import bantu3 from '../../assets/bantu-3.jpg';
import bantu4 from '../../assets/bantu-4.jpg';
import bantu5 from '../../assets/bantu-5.jpg';

import BarFooter from '../../Components/BarFooter';

import bantuDrink1 from '@/assets/bantu-drink-1.jpg';
import bantuDrink2 from '@/assets/bantu-drink-2.jpg';
import bantuDrink3 from '@/assets/bantu-drink-3.jpg';

import momo from '@/assets/bantu-momo.jpg';

import './BantuPage.css'

function BantuPage() {
  const images = [bantu1, bantu2, bantu3, bantu4, bantu5];

  const text = `Aquí no vienes solo a tomar cerveza: vienes a revivir himnos eternos. Guitarras que lloran, voces que acarician y letras que aún laten fuerte. Nuestras cervezas artesanales son tan intensas como los solos que llenan el aire. Desde Led Zeppelin hasta  Bon Jovi, cada canción es un trago de nostalgia y rebeldía. Este no es un bar, es un escenario para el alma. Si el rock es tu refugio, acabas de encontrar tu hogar.`;

  const spotifyEmbed = `
    <iframe style="border-radius:15px" src="https://open.spotify.com/embed/track/37ZJ0p5Jm13JPevGcx4SkF?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;

  const mapEmbed = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1407491885393!2d-75.56640262498257!3d6.24517562633505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44294039094027%3A0xd05f9ea46f489b15!2sBant%C3%BA%20Torres!5e0!3m2!1ses-419!2sco!4v1748578423542!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
      { image: bantuDrink1, title: 'Tenessee Whiskey', text: "Nacida del fuego lento y la madera vieja, esta rojinegra lleva en el alma el susurro del whiskey. Un cuerpo profundo con destellos ámbar, donde el dulzor maltoso se mezcla con la calidez sutil del Tennessee, potenciando cada sorbo sin robarle ligereza. Es para quienes buscan intensidad sin estridencias, sabor con historia. Acompaña bien los silencios largos, las miradas que dicen mucho y los brindis que no necesitan ruido." },
      { image: bantuDrink2, title: 'Tropical IPA', text: "Nacida donde el sol nunca se esconde, esta Tropical IPA es un choque brillante entre lo salvaje y lo fresco. Frutas tropicales explotan al primer sorbo —mango, maracuyá, algo de piña—, mientras un amargor juguetón equilibra la dulzura y la mantiene viva. Es para los que creen que el verano no es una estación, sino una actitud. Ligera pero con carácter, es ideal para tardes largas, risas fáciles y playlists que huelen a mar." },
      { image: bantuDrink3, title: 'Porter', text: "Nacida entre cielos grises y noches largas, esta porter oscura trae el equilibrio perfecto: amargor medio que despierta, y notas achocolatadas que abrazan. Es para los que entienden que la oscuridad también tiene dulzura, que no todo lo intenso tiene que ser pesado. Con cuerpo ligero y sabor profundo, es la compañera ideal para charlas lentas, playlists con alma y finales de día que saben a victoria silenciosa." },
    ],
    factTitle: "Sabías que",
    factText: 'Bantú fue uno de los primeros bares en apostar por el rock en Medellín, en una época (antes del 92) en la que no era común encontrar este género en la escena nocturna de la ciudad. Lo más rebelde: lo hizo justo en la curva de la UdeA, un sector conocido por bares más tradicionales y públicos más tranquilos. Pero Bantú llegó a romper esquemas: puso el desorden, el ruido y el rock al frente, y desde ahí empezó una movida que cambiaría para siempre la forma de rumbear en ese rincón de Medellín.',
    cardImage: momo,
  };

    const barFooterProps = {
      backgroundColor: "#281e1e",
      instagram:"https://www.instagram.com/bantu.rockbar/",
      tiktok:"https://www.tiktok.com/@bantu.rockbar",
      facebook:"https://www.facebook.com/bantu.bar"
    }

  return (
    <>
      <NavBar backgroundColor='#281e1e' active="BARES"/>
      <div className="Container">
        <BarLeft {...barLeftProps} />
        <BarRight {...barRightProps} />
      </div>
      <BarFooter {...barFooterProps} />
    </>
  );
}

export default BantuPage;
