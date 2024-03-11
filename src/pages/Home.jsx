// React Imports
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//helpers
import fetchSheetData from '../helpers/fetchSheetData';

// components
import MenuTile from '../components/MenuTile';
import LoadingCard from '../components/LoadingCard';
import GenericCard from '../components/GenericCard';

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
    fetchSheetData(import.meta.env.SPREADSHEET_ID, 'Hoja 1', import.meta.env.API_KEY)
      .then((data) => {
        console.log('datos', data);
        if (data?.values && data.values.length > 0) {
          setCellValue(data.values);
        } else {
          setCellValue('Dato no disponible');
        }
      })
      .catch((error) => {
        console.error(error);
        setCellValue('Error al cargar datos');
      });
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
        {/* Aluminio 1 */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={aluminioRef}
            cell={{
              img: ['rec.jpg'],
              title: cellValue[0][0],
              subtitle1: cellValue[1][0],
              modelo1: cellValue[2][0],
              precio1: cellValue[2][1],
              modelo2: cellValue[3][0],
              precio2: cellValue[3][1],
              modelo3: cellValue[4][0],
              precio3: cellValue[4][1],
              modelo4: cellValue[5][0],
              precio4: cellValue[5][1],
              subtitle2: cellValue[6][0],
              label1: cellValue[7][0],
              label2: cellValue[8][0],
              label3: cellValue[9][0],
              label4: cellValue[10][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Alumino 2 */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={aluminioRef}
            cell={{
              img: ['cor.jpg'],
              title: cellValue[15][0],
              subtitle1: cellValue[16][0],
              modelo1: cellValue[17][0],
              precio1: cellValue[17][1],
              modelo2: cellValue[18][0],
              precio2: cellValue[18][1],
              modelo3: cellValue[19][0],
              precio3: cellValue[19][1],
              modelo4: cellValue[20][0],
              precio4: cellValue[20][1],
              subtitle2: cellValue[21][0],
              label1: cellValue[22][0],
              label2: cellValue[23][0],
              label3: cellValue[24][0],
              label4: cellValue[25][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Aluminio 3 */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={aluminioRef}
            cell={{
              img: ['cur.jpg'],
              title: cellValue[30][0],
              subtitle1: cellValue[31][0],
              modelo1: cellValue[32][0],
              precio1: cellValue[32][1],
              modelo2: cellValue[33][0],
              precio2: cellValue[33][1],
              modelo3: cellValue[34][0],
              precio3: cellValue[34][1],
              modelo4: cellValue[35][0],
              precio4: cellValue[35][1],
              subtitle2: cellValue[36][0],
              label1: cellValue[37][0],
              label2: cellValue[38][0],
              label3: cellValue[39][0],
              label4: cellValue[40][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* inoxi */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={inoxiRef}
            cell={{
              img: ['inox.jpg'],
              title: cellValue[45][0],
              subtitle1: cellValue[46][0],
              modelo1: cellValue[47][0],
              precio1: cellValue[47][1],
              modelo2: cellValue[48][0],
              precio2: cellValue[48][1],
              modelo3: cellValue[49][0],
              precio3: cellValue[49][1],
              modelo4: cellValue[50][0],
              precio4: cellValue[50][1],
              subtitle2: cellValue[51][0],
              label1: cellValue[52][0],
              label2: cellValue[53][0],
              label3: cellValue[54][0],
              label4: cellValue[55][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* bombilla para mate */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={bombillasRef}
            cell={{
              img: ['bomb.jpg'],
              title: cellValue[60][0],
              subtitle1: cellValue[61][0],
              modelo1: cellValue[62][0],
              precio1: cellValue[62][1],
              modelo2: cellValue[63][0],
              precio2: cellValue[63][1],
              modelo3: cellValue[64][0],
              precio3: cellValue[64][1],
              modelo4: cellValue[65][0],
              precio4: cellValue[65][1],
              subtitle2: cellValue[66][0],
              label1: cellValue[67][0],
              label2: cellValue[68][0],
              label3: cellValue[69][0],
              label4: cellValue[70][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* limpiador */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={limpiadorRef}
            cell={{
              img: ['limp.jpg'],
              title: cellValue[75][0],
              subtitle1: cellValue[76][0],
              modelo1: cellValue[77][0],
              precio1: cellValue[77][1],
              modelo2: cellValue[78][0],
              precio2: cellValue[78][1],
              modelo3: cellValue[79][0],
              precio3: cellValue[79][1],
              modelo4: cellValue[80][0],
              precio4: cellValue[80][1],
              subtitle2: cellValue[81][0],
              label1: cellValue[82][0],
              label2: cellValue[83][0],
              label3: cellValue[84][0],
              label4: cellValue[85][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* estuche de viaje */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={estucheRef}
            cell={{
              img: ['est.jpg', 'est pers.jpg'],
              title: cellValue[90][0],
              subtitle1: cellValue[91][0],
              modelo1: cellValue[92][0],
              precio1: cellValue[92][1],
              modelo2: cellValue[93][0],
              precio2: cellValue[93][1],
              modelo3: cellValue[94][0],
              precio3: cellValue[94][1],
              modelo4: cellValue[95][0],
              precio4: cellValue[95][1],
              subtitle2: cellValue[96][0],
              label1: cellValue[97][0],
              label2: cellValue[98][0],
              label3: cellValue[99][0],
              label4: cellValue[100][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Exhibidor de cartulina 1 */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={gondolaRef}
            cell={{
              img: ['10.jpg'],
              title: cellValue[105][0],
              subtitle1: cellValue[106][0],
              modelo1: cellValue[107][0],
              precio1: cellValue[107][1],
              modelo2: cellValue[108][0],
              precio2: cellValue[108][1],
              modelo3: cellValue[109][0],
              precio3: cellValue[109][1],
              modelo4: cellValue[110][0],
              precio4: cellValue[110][1],
              subtitle2: cellValue[111][0],
              label1: cellValue[112][0],
              label2: cellValue[113][0],
              label3: cellValue[114][0],
              label4: cellValue[115][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* exhib cartulina 2 */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={mostradorRef}
            cell={{
              img: ['kit4.jpg'],
              title: cellValue[120][0],
              subtitle1: cellValue[121][0],
              modelo1: cellValue[122][0],
              precio1: cellValue[122][1],
              modelo2: cellValue[123][0],
              precio2: cellValue[123][1],
              modelo3: cellValue[124][0],
              precio3: cellValue[124][1],
              modelo4: cellValue[125][0],
              precio4: cellValue[125][1],
              subtitle2: cellValue[126][0],
              label1: cellValue[127][0],
              label2: cellValue[128][0],
              label3: cellValue[129][0],
              label4: cellValue[130][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* exhib cartulina 3 */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={sinref}
            cell={{
              img: ['IMG_85857.png'],
              title: cellValue[135][0],
              subtitle1: cellValue[136][0],
              modelo1: cellValue[137][0],
              precio1: cellValue[137][1],
              modelo2: cellValue[138][0],
              precio2: cellValue[138][1],
              modelo3: cellValue[139][0],
              precio3: cellValue[139][1],
              modelo4: cellValue[140][0],
              precio4: cellValue[140][1],
              subtitle2: cellValue[141][0],
              label1: cellValue[142][0],
              label2: cellValue[143][0],
              label3: cellValue[144][0],
              label4: cellValue[145][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Exhibidor fibrofácil granel */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={mostradorRef}
            cell={{
              img: ['IMG_9470.jpg', 'photo_514HG1063016110992029_y.png'],
              title: cellValue[150][0],
              subtitle1: cellValue[151][0],
              modelo1: cellValue[152][0],
              precio1: cellValue[152][1],
              modelo2: cellValue[153][0],
              precio2: cellValue[153][1],
              modelo3: cellValue[154][0],
              precio3: cellValue[154][1],
              modelo4: cellValue[155][0],
              precio4: cellValue[155][1],
              subtitle2: cellValue[156][0],
              label1: cellValue[157][0],
              label2: cellValue[158][0],
              label3: cellValue[159][0],
              label4: cellValue[160][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Exhibidor fibrofácil kit 4 x unidad */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={sinref}
            cell={{
              img: ['ex kit.jpg'],
              title: cellValue[165][0],
              subtitle1: cellValue[166][0],
              modelo1: cellValue[167][0],
              precio1: cellValue[167][1],
              modelo2: cellValue[168][0],
              precio2: cellValue[168][1],
              modelo3: cellValue[169][0],
              precio3: cellValue[169][1],
              modelo4: cellValue[170][0],
              precio4: cellValue[170][1],
              subtitle2: cellValue[171][0],
              label1: cellValue[172][0],
              label2: cellValue[173][0],
              label3: cellValue[174][0],
              label4: cellValue[175][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Exhibidor fibrofácil completo */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={sinref}
            cell={{
              img: ['IMG_9520.jpg'],
              title: cellValue[180][0],
              subtitle1: cellValue[181][0],
              modelo1: cellValue[182][0],
              precio1: cellValue[182][1],
              modelo2: cellValue[183][0],
              precio2: cellValue[183][1],
              modelo3: cellValue[184][0],
              precio3: cellValue[184][1],
              modelo4: cellValue[185][0],
              precio4: cellValue[185][1],
              subtitle2: cellValue[186][0],
              label1: cellValue[187][0],
              label2: cellValue[188][0],
              label3: cellValue[189][0],
              label4: cellValue[190][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Exhibidor fibrofácil premium */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={sinref}
            cell={{
              img: ['343813454_191905643672724_808407925404404510_n.jpg'],
              title: cellValue[195][0],
              subtitle1: cellValue[196][0],
              modelo1: cellValue[197][0],
              precio1: cellValue[197][1],
              modelo2: cellValue[198][0],
              precio2: cellValue[198][1],
              modelo3: cellValue[199][0],
              precio3: cellValue[199][1],
              modelo4: cellValue[200][0],
              precio4: cellValue[200][1],
              subtitle2: cellValue[201][0],
              label1: cellValue[202][0],
              label2: cellValue[203][0],
              label3: cellValue[204][0],
              label4: cellValue[205][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {Array.isArray(cellValue) ? (
          <GenericCard
            // ref={sinref}
            cell={{
              img: ['343813454_191905643672724_808407925404404510_n.jpg'],
              title: cellValue[210][0],
              subtitle1: cellValue[211][0],
              modelo1: cellValue[212][0],
              precio1: cellValue[212][1],
              modelo2: cellValue[213][0],
              precio2: cellValue[213][1],
              modelo3: cellValue[214][0],
              precio3: cellValue[214][1],
              modelo4: cellValue[215][0],
              precio4: cellValue[215][1],
              subtitle2: cellValue[216][0],
              label1: cellValue[217][0],
              label2: cellValue[218][0],
              label3: cellValue[219][0],
              label4: cellValue[220][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}

        {/* Personalizacion */}
        {Array.isArray(cellValue) ? (
          <GenericCard
            ref={personalizadosRef}
            cell={{
              img: [
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
              title: cellValue[225][0],
              subtitle1: cellValue[226][0],
              modelo1: cellValue[227][0],
              precio1: cellValue[227][1],
              modelo2: cellValue[228][0],
              precio2: cellValue[228][1],
              modelo3: cellValue[229][0],
              precio3: cellValue[229][1],
              modelo4: cellValue[230][0],
              precio4: cellValue[230][1],
              subtitle2: cellValue[231][0],
              label1: cellValue[232][0],
              label2: cellValue[233][0],
              label3: cellValue[234][0],
              label4: cellValue[235][0],
            }}
          />
        ) : (
          <LoadingCard />
        )}
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
