import BarLeft from '../../Components/BarLeft';
import BarRight from '../../Components/BarRight';
import NavBar from '../../Components/NavBar';

import foxey from '../../assets/foxey-logo.png';
import lhod from '../../assets/lhod-logo.png';
import bantu from '../../assets/bantu-logo.png';
import valhala from '../../assets/valhala-logo.png';
import BarFooter from '../../Components/BarFooter';

function BantuPage() {
  const images = [foxey, lhod, bantu, valhala];

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;

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

  return (
    <>
      <NavBar backgroundColor='#281e1e'/>
      <div className="Container">
        <BarLeft
          images={images}
          text={text}
          spotifyEmbed={spotifyEmbed}
          mapEmbed={mapEmbed}
          backgroundColor="#281e1e"
        />
        <BarRight
          title="Bantu"
          drinks={[
            {
              image: foxey,
              title: 'Bebida 1',
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
               tristique senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
               tristique senectus.`,
            },
            {
              image: lhod,
              title: 'Bebida 2',
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
               tristique senectus. senectus.`,
            },
            {
              image: valhala,
              title: 'Bebida 3',
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique
               senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
               tristique senectus.`,
            },
          ]}
          factTitle="Sabías que"
          factText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus."
          cardImage={bantu}
        />    
      </div>
      <BarFooter backgroundColor='#281e1e'></BarFooter>
    </>
  );
}

export default BantuPage;
