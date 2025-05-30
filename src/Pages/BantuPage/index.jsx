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

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;

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
      { image: bantuDrink1, title: 'Tenessee Whiskey', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: bantuDrink2, title: 'Tropical IPA', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
      { image: bantuDrink3, title: 'Porter', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus." },
    ],
    factTitle: "Sabías que",
    factText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbitristique senectus.',
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
