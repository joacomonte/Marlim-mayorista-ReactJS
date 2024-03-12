// React Imports
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//helpers
import fetchSheetData from '../helpers/fetchSheetData';
// components
import MenuTile from '../components/MenuTile';
import LoadingCard from '../components/LoadingCard';
import GenericCard from '../components/GenericCard';

const fetchDataFromSpreadsheet = async (spreadsheetId, sheetName, apiKey) => {
  try {
    const response = await fetchSheetData(spreadsheetId, sheetName, apiKey);
    return response;
  } catch (error) {
    console.error('Error al cargar datos:', error);
    return null;
  }
};

const generateChunks = (data) => {
  const chunks = [];
  if (data?.values && data.values.length > 0) {
    let chunkIndex = 0;
    for (let i = 0; i < data.values.length; i += 15) {
      const chunk = data.values.slice(i, i + 11);
      if (chunk.length > 0) {
        chunks.push(chunk);
        chunkIndex++;
      }
    }
  }
  return chunks;
};

export default function Home() {
  const imageNames = [
    'merle.png',
    'ferchetto.png',
    'stanley.png',
    'pedidos_ya.png',
    'coffee_store.png',
    'bosques.png',
    'dd2.png',
    'me_ext.png',
    'borja.png',
    'mies.png',
    'garcia.png',
    'templeton.png',
    'wedrink.png',
    'tiendas_green.png',
    'emme.png',
  ];

  const cardIMGs = [
    ['rec.jpg'], //card 1
    ['cor.jpg'], // card 2
    ['cur.jpg'], //
    ['inox.jpg'],
    ['bomb.jpg'],
    ['limp.jpg'],
    ['est.jpg', 'est pers.jpg'],
    ['10.jpg'],
    ['kit4.jpg'],
    ['IMG_85857.png'],
    ['IMG_9470.jpg', 'photo_514HG1063016110992029_y.png'],
    ['ex kit.jpg'],
    ['IMG_9520.jpg'],
    ['343813454_191905643672724_808407925404404510_n.jpg'],
    ['343813454_191905643672724_808407925404404510_n.jpg'],
    [
      'IMG_6824.jpg',
      '1234567.jpg',
      '123.jpg',
      '123456.jpg',
      'IMG_8361.jpg',
      '12345.jpg',
      '0123456.jpg',
      '01234.jpg',
      '0123.jpg',
      '18.jpg',
      '1234.jpg',
      '012.jpg',
      '12345678.jpg',
      '01.jpg',
    ],
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // default value before fetch
  const [cellValue, setCellValue] = useState('Cargando datos...');

  //useRefs
  const aluminioRef = useRef();
  const inoxiRef = useRef();
  const bombillasRef = useRef();
  const limpiadorRef = useRef();
  const estucheRef = useRef();
  const gondolaRef = useRef();
  const mostradorRef = useRef();
  const personalizadosRef = useRef();

  //testing rebase

  // scrolls to the ref and then does a top margin correction
  const scrollToRef = (ref) => ref.current.scrollIntoView();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromSpreadsheet(
        import.meta.env.VITE_SPREADSHEET_ID,
        'Hoja 1',
        import.meta.env.VITE_API_KEY
      );

      if (data) {
        const chunks = generateChunks(data);
        setCellValue(chunks.length > 0 ? chunks : 'Dato no disponible');
      } else {
        setCellValue('Error al cargar datos');
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className='navBar'>
        <div className='navBar__tortuLogoContainer'>
          <img src='/logoTortu.png' onClick={() => window.scrollTo(0, 0)} alt='Tortu Logo' />
        </div>
        <Link to='/contact' className='navBar__Button'>
          Contacto
        </Link>
      </div>

      <div className='menuTilesContainer'>
        {/* Sorbetes de colores - Alumino anodizado */}
        <div onClick={() => scrollToRef(aluminioRef)}>
          <MenuTile bgcolor='#F2C819' title={'Sorbetes de colores - Alumino anodizado'} />
        </div>

        {/* Sorbetes de acero inoxidable */}
        <div onClick={() => scrollToRef(inoxiRef)}>
          <MenuTile bgcolor='#FF8734' title={'Sorbetes de acero inoxidable'} />
        </div>

        {/* Bombillas para mate */}
        <div onClick={() => scrollToRef(bombillasRef)}>
          <MenuTile bgcolor='#E74741' title={'Bombillas para mate'} />
        </div>

        {/* Limpiador de cerda */}
        <div onClick={() => scrollToRef(limpiadorRef)}>
          <MenuTile bgcolor='#FF8AC5' title={'Limpiador de cerda'} />
        </div>

        {/* Estuche de viaje */}
        <div onClick={() => scrollToRef(estucheRef)}>
          <MenuTile bgcolor='#ED12ED' title={'Estuche de viaje'} />
        </div>

        {/* Exhibidores para góndola */}
        <div onClick={() => scrollToRef(gondolaRef)}>
          <MenuTile bgcolor='#1A4BB2' title={'Exhibidores góndola'} />
        </div>

        {/* Exhibidores para mostrador */}
        <div onClick={() => scrollToRef(mostradorRef)}>
          <MenuTile bgcolor='#0AB8F8' title={'Exhibidores mostrador'} />
        </div>

        {/* Personalizaciones */}
        <div onClick={() => scrollToRef(personalizadosRef)}>
          <MenuTile bgcolor='#85BD6B' title={'Personalizados'} />
        </div>
      </div>

      <div className='fundacionContainer'>
        <p className='fundacionText'>
          {' '}
          Con tu compra colaboras con el programa de Residencias Universitarias de Fundación Sí.
          <br></br>
          Porque el verdadero cambio está en la educación y por eso decidimos donarles cada mes el 1% de todas
          nuestras ventas.{' '}
        </p>
        <br></br>

        <div className='logo_si_container'>
          <img className='bannerLogoImg' src={`/logos/si.png`} alt='fundacion si' />
        </div>
      </div>

      <div className='cardsContainer'>
        {Array.isArray(cellValue) &&
          cellValue.map((chunk, index) => (
            <GenericCard
              key={index}
              cell={{
                img: cardIMGs[index],
                title: chunk[0][0],
                subtitle1: chunk[1][0],
                modelo1: chunk[2][0],
                precio1: chunk[2][1],
                modelo2: chunk[3][0],
                precio2: chunk[3][1],
                modelo3: chunk[4][0],
                precio3: chunk[4][1],
                modelo4: chunk[5][0],
                precio4: chunk[5][1],
                subtitle2: chunk[6][0],
                label1: chunk[7][0],
                label2: chunk[8][0],
                label3: chunk[9][0],
                label4: chunk[10][0],
              }}
            />
          ))}
        {!Array.isArray(cellValue) && <LoadingCard />}
      </div>

      <section className='bannerLogosSection'>
        <h1 style={{ fontSize: '20px' }}>Confían en nosotros</h1>
        <div className='bannerLogoSectionContainer'>
          {imageNames.map((imageName, index) => (
            <div className='logoMarcasContainer'>
              <img className='bannerLogoImg' src={`/logos/${imageName}`} alt={`Gallery ${index}`} key={index} />
            </div>
          ))}
        </div>
      </section>

      {/* logo montech */}
      <footer style={{ textAlign: 'center', marginBottom: '10px', color: 'grey' }}>
        <a href='https://github.com/joacomonte'>
          <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='40' height='40' viewBox='0 0 64 64'>
            <linearGradient
              id='KpzH_ttTMIjq8dhx1zD2pa_52539_gr1'
              x1='30.999'
              x2='30.999'
              y1='16'
              y2='55.342'
              gradientUnits='userSpaceOnUse'
              spreadMethod='reflect'
            >
              <stop offset='0' stop-color='#6dc7ff'></stop>
              <stop offset='1' stop-color='#e6abff'></stop>
            </linearGradient>
            <path
              fill='url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)'
              d='M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z'
            ></path>
            <linearGradient
              id='KpzH_ttTMIjq8dhx1zD2pb_52539_gr2'
              x1='32'
              x2='32'
              y1='5'
              y2='59.167'
              gradientUnits='userSpaceOnUse'
              spreadMethod='reflect'
            >
              <stop offset='0' stop-color='#1a6dff'></stop>
              <stop offset='1' stop-color='#c822ff'></stop>
            </linearGradient>
            <path
              fill='url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)'
              d='M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z'
            ></path>
          </svg>
          <p>Made by Montech</p>
        </a>
      </footer>
    </main>
  );
}
