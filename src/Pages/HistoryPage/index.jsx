import Navbar from '../../Components/NavBar';
import SectionTwoColumns from '../../Components/SectionTwoColumns';
import SectionImageGrid from '../../Components/SectionImageGrid';
import './HistoryPage.css';

const HistoryPage = () => (
  <>
    <Navbar backgroundColor='771111' active="HISTORY"></Navbar>

    <SectionTwoColumns
      title="Así empezó este parche"
      leftContent={
        <p>
          En la violenta Medellín de los años 80, entonces conocida como “la capital mundial del crimen”, floreció a la vez una intensa escena juvenil de rock y metal. A pesar de los toques de queda y la guerra urbana, los jóvenes comenzaron a organizar parches y festivales underground. El narcotraficante Pablo Escobar incluso patrocinó eventos culturales: en 1983 respaldó un concierto de la banda estadounidense <span className='bold-rocker'>Argus</span> en la Plaza de Toros La Macarena. En ese contexto, el rock y el punk se convirtieron en válvulas de escape frente al terror cotidiano. Como retrató la película <span className='bold-rocker-red'>Rodrigo D: No Futuro</span> (1990), la contracultura rockera y punk nacía de la violencia, forjando un “movimiento armado” con guitarras en barrios populares.
        </p>
      }
      rightContent={
        <>
          <img
            src="src/assets/batalla2-multitud.jpg"
            alt="Multitud en la batalla de bandas en la Macarena 1985"
            loading='lazy'
          />
          <p className='bold-rocker' style={{textAlign: "center", margin: "0px"}}>Multitud en la batalla de bandas en la Macarena 1985</p>
        </>
      }
      alignTitle="left"
    />

    <SectionTwoColumns
      title="El grito que salió del barrio"
      leftContent={
        <>
          <p>
            Desde fines de los 70s y sobre todo en los 80s, Medellín fue un vórtice de violencia donde el metal se hizo banda sonora de una juventud desafiante. En 1971 ya se había celebrado el <span className='bold-rocker'>Festival de Ancón</span> (18-20 de junio), denominado por la prensa como un “atentado” contra la moral conservadora: el primer gran hito rockero paisa. Durante los 80, el género dominante fue el <span className='bold-rocker-red'>“Metal Medallo”</span>: sonido pesado y distorsionado, letras nihilistas y estéticas antisistema.
          </p>
          <img
            src="src/assets/festivalancon.jpg"
            alt="Vista del festival de Ancón de 1971"
            loading='lazy'
          />
          <span className='bold-rocker' style={{textAlign: "center", margin: "0px"}}>Vista del festival de Ancón de 1971</span>
        </>
      }
      rightContent={
        <>
          <p>
            En Medellín aparecieron así grupos pioneros del metal extremo: fusiones de thrash, death y black no comerciales que se opusieron al establishment. Por ejemplo, el grupo <span className='bold-rocker'>Parabellum</span> (del barrio Buenos Aires) nombró sus canciones con temas de guerra y ocultismo, mientras que bandas como <span className='bold-rocker'>Mierda</span> y <span className='bold-rocker'>Masacre</span> llevaron el sonido al límite. Sus letras atacaban la tradición religiosa paisa y la violencia social: eran un eco siniestro de la atmósfera urbana del terror.
          </p>
          <img
            src="src/assets/parabellum4-castilla.jpg"
            alt="Concierto de la banda Parabellum en Castilla en 1986"
            loading='lazy'
          />
          <span className='bold-rocker' style={{textAlign: "center", margin: "0px"}}>Concierto de la banda Parabellum en Castilla en 1986</span>
        </>
      }
      alignTitle="center"
    />

    <SectionTwoColumns
      title={
        <>
          Los que la rompieron<br />
          desde el principio
        </>
      }
      leftContent={
        <p>
          <span className='bold-rocker-red'>Kraken</span> fue una de las primeras bandas insignia de Medellín. Fundada en 1983, su líder <span className='bold-rocker'>Elkin Ramírez “El Titán”</span> fue reconocido como pionero del heavy metal colombiano. Kraken llegó a tocar en la legendaria <span className='bold-rocker-red'>Batalla de las Bandas</span> de 1985 y décadas después su vocalista fue homenajeado en la Catedral Metropolitana. Otra banda clave es <span className='bold-rocker'>Masacre</span> (fundada en 1986, thrash metal), cuyo fundador Alex Oquendo llegó a calificar a Ramírez como “el padre de los rockeros aquí”. Junto a ellos, surgieron grupos como <span className='bold-rocker'>Sacrilegio</span>, <span className='bold-rocker'>Astaroth</span> y <span className='bold-rocker'>Nekromantie</span> (thrash/black), y formaciones influenciadas por el punk como <span className='bold-rocker'>Desastre</span>. En conjunto, Medellín generó bandas que inspiraron luego a toda Colombia: la lista de participantes en <span className='bold-rocker-red'>la Batalla de 1985</span> –<span className='bold-rocker'>Spól, Glöster Gladiattor, Danger, Mierda, Excalibur, Parabellum, Lasser y Kraken</span>– refleja el núcleo duro de aquella época.
        </p>
      }
      rightContent={
        <>
          <img
            src="src/assets/Kraken.webp"
            alt="Integrantes de la Banda Kraken"
            loading='lazy'
          />
          <p className='bold-rocker' style={{textAlign: "center", margin: "0px"}}>Integrantes de la Banda Kraken</p>
        </>
      }
      alignTitle="left"
    />

    <SectionTwoColumns
      title={
        <>
          Los pogos que<br />
          hicieron historia
        </>
      }
      leftContent={
        <p>
          A lo largo de las décadas hubo eventos que marcaron la memoria colectiva. Tras Ancón, el más icónico fue la <span className='bold-rocker-red'>Batalla de las Bandas</span> del 23 de marzo de 1985 en La Macarena, concebida para promover el talento local. Casi 20 años después, en esa misma plaza el municipio lanzó en 2004 el <span className='bold-rocker'>Festival Altavoz</span>, un encuentro anual de rock, metal y punk que atrajo multitudes. En su primera edición (11 de diciembre de 2004) tocaron bandas nacionales como <span className='bold-rocker'>I.R.A, Aterciopelados y Superlitio</span>, y la internacional <span className='bold-rocker'>Kinky</span> (México). El Altavoz continuó consolidándose: por ejemplo, en 2011 la legendaria banda punk inglesa <span className='bold-rocker'>The Adicts</span> dio un concierto inolvidable en Medellín.
        </p>
      }
      rightContent={
        <>
          <img
            src="src/assets/batalla4-parabellum.jpg"
            alt="Parabellum en la batalla de bandas en la Macarena 1985"
            loading='lazy'
          />
          <p className='bold-rocker' style={{textAlign: "center", margin: "0px"}}>Parabellum en la batalla de bandas en la Macarena 1985</p>
        </>
      }
      alignTitle="right"
    />

    <SectionImageGrid
      title={
        <>
          Punketos, Metaleros, Y una<br />
          Guerra sin tregua
        </>
      }
      alignTitle="center"
      text={
        <>
          <p>
            La confrontación entre <span className="bold-rocker">metaleros</span>, <span className="bold-rocker">rockeros</span> y <span className="bold-rocker">punketos</span> fue notable especialmente en los 80.
            La <span className="bold-rocker-red">Batalla de 1985</span> ilustra esta rivalidad: el público punk y metalero (de barrios populares) inició disturbios desde las primeras bandas,
            lanzando piedras y gritos de “¡Caspa, caspa!” contra las actuaciones consideradas “blandas”.
            Tras un intermedio no programado, los ánimos siguieron incendiados. Pronto estalló una guerra de clases y sectaria en la que metaleros y punketos se enfrentaron a rockeros de clase media. En este “campo romano distorsionado” solo bandas ultrarradicales como <span className='bold-rocker'>Parabellum</span> podían calmar la muchedumbre. El incidente culminó con la suspensión del concierto (Kraken nunca llegó a tocar) y la dispersión violenta del público. Los medios locales lo describieron como un caos escandaloso y una suerte de “orgía” de destrucción. Estos choques reflejaron tensiones sociales profundas: mientras unos veían en el metal y el punk un grito antisistema, otros lo consideraban una amenaza al orden.
          </p>
        </>
      }
      images={[
        {
          src: 'src/assets/batalla5-policia.jpg',
          alt: 'Policías lanzando agua para detener los disturbios en la batalla de bandas',
        },
        {
          src: 'src/assets/batalla1-salida.jpg',
          alt: 'Sector exterior de la Macarena antes de la batalla de bandas',
        },
      ]}
    />

  </>
);

export default HistoryPage;
