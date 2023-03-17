// React Imports
import React, { useState, useEffect, useRef } from "react";

//helpers
import fetchSheetData from "./helpers/fetchSheetData";

// components
import MenuTile from "./components/MenuTile";
import LoadingCard from "./components/LoadingCard";
import GenericCard from "./components/GenericCard";



export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  // default value before fetch
  const [cellValue, setCellValue] = useState('Loading...');

  //useRefs
  const aluminioRef = useRef(); 
  const inoxiRef = useRef(); 
  const bombillasRef = useRef(); 
  const limpiadorRef = useRef(); 
  const estucheRef = useRef(); 
  const gondolaRef = useRef(); 
  const mostradorRef = useRef();
  const personalizadosRef = useRef();




  // scrolls to the ref and then does a top margin correction
  function scrollWithOffset(argRef) {
    argRef.current.scrollIntoView();
    setTimeout(()=>  {window.scrollBy(0, -80)}, 700)
  }
  
  useEffect(() => {
    fetchSheetData(import.meta.env.VITE_SPREADSHEET_ID, 'Hoja 1', import.meta.env.VITE_API_KEY)
      .then((data) => {
        if (data.values && data.values.length > 0) {
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
    <>

      <div className="navBar"> 
        <div className="navBar__tortuLogoContainer"> <img src="/logoTortu.png" onClick={() => window.scrollTo(0, 0)}></img> </div>
      </div>

      <div className="menuTilesContainer">
        
        {/* Sorbetes de colores - Alumino anodizado */}
          <div onClick={ () =>  scrollWithOffset(aluminioRef)}>
              <MenuTile bgcolor="#F2C819" cell={Array.isArray(cellValue) ? cellValue[0][0] : cellValue} />
            </div>

            {/* Sorbetes de acero inoxidable */}
            <div onClick={ () =>  scrollWithOffset(inoxiRef)}>
              <MenuTile bgcolor='#FF8734' cell={Array.isArray(cellValue) ? cellValue[1][0] : cellValue}/>
            </div>

            {/* Bombillas para mate */}
            <div onClick={ () =>  scrollWithOffset(bombillasRef)}>
              <MenuTile bgcolor='#E74741' cell={Array.isArray(cellValue) ? cellValue[2][0] : cellValue}/>
            </div>
              
            {/* Limpiador de cerda */}
            <div onClick={ () =>  scrollWithOffset(limpiadorRef)}>
              <MenuTile bgcolor='#FF8AC5' cell={Array.isArray(cellValue) ? cellValue[3][0] : cellValue}/>
            </div>
              
            {/* Estuche de viaje */}
            <div onClick={ () =>  scrollWithOffset(estucheRef)}>
              <MenuTile bgcolor='#ED12ED' cell={Array.isArray(cellValue) ? cellValue[4][0] : cellValue}/>
            </div>
            
            {/* Exhibidores para góndola */}
            <div onClick={ () =>  scrollWithOffset(gondolaRef)}>
              <MenuTile bgcolor='#1A4BB2' cell={Array.isArray(cellValue) ? cellValue[5][0] : cellValue}/>
            </div>
            
            {/* Exhibidores para mostrador */}
            <div onClick={ () =>  scrollWithOffset(mostradorRef)}>
              <MenuTile bgcolor='#0AB8F8' cell={Array.isArray(cellValue) ? cellValue[6][0] : cellValue}/>
            </div>

            {/* Personalizaciones */}
            <div onClick={ () =>  scrollWithOffset(personalizadosRef)}>
              <MenuTile bgcolor='#85BD6B' cell={Array.isArray(cellValue) ? cellValue[7][0] : cellValue}/>
            </div>

      </div>
            
  
      <div className="cardsContainer">

        {/* Aluminio 1 */}
        {Array.isArray(cellValue) ? 
          (
            <GenericCard 
            ref={aluminioRef}
            cell={{
              
              img:["rec.jpg"],
              title: cellValue[9][0],
              subtitle: cellValue[9][0],
              modelo1: cellValue[11][0],
              precio1: cellValue[11][1],
              // modelo2: cellValue[12][0],
              // precio2: cellValue[12][1],
              // modelo3: cellValue[13][0],
              // precio3: cellValue[13][1],
              customize: cellValue[12][0],
              customizePrice: cellValue[12][1],
              // en comun
              descuentosSubtitle: cellValue[17][0],
              descuento1: cellValue[18][0],
              descuento2: cellValue[19][0],
              descuento3: cellValue[20][0],
              descuento4: cellValue[21][0],
            }}/>
          )
        :<LoadingCard/>}



        {/* Alumino 2 */}
        {Array.isArray(cellValue) ? 
          (
            <GenericCard 
            // ref={aluminioRef}
            cell={{
              
              img:["cor.jpg"],
              title: cellValue[9][2],
              subtitle: cellValue[9][2],
              modelo1: cellValue[11][2],
              precio1: cellValue[11][3],
              // modelo2: cellValue[12][0],
              // precio2: cellValue[12][1],
              // modelo3: cellValue[13][0],
              // precio3: cellValue[13][1],
              customize: cellValue[12][2],
              customizePrice: cellValue[12][3],
              // en comun
              descuentosSubtitle: cellValue[17][0],
              descuento1: cellValue[18][0],
              descuento2: cellValue[19][0],
              descuento3: cellValue[20][0],
              descuento4: cellValue[21][0],
            }}/>
          )
        :<LoadingCard/>}

        {/* Aluminio 3 */}
        {Array.isArray(cellValue) ? 
          (
            <GenericCard 
            // ref={aluminioRef}
            cell={{
              
              img:["cur.jpg"],
              title: cellValue[9][4],
              subtitle: cellValue[9][4],
              modelo1: cellValue[11][4],
              precio1: cellValue[11][5],
              // modelo2: cellValue[12][0],
              // precio2: cellValue[12][1],
              // modelo3: cellValue[13][0],
              // precio3: cellValue[13][1],
              customize: cellValue[12][4],
              customizePrice: cellValue[12][5],
              // en comun
              descuentosSubtitle: cellValue[17][0],
              descuento1: cellValue[18][0],
              descuento2: cellValue[19][0],
              descuento3: cellValue[20][0],
              descuento4: cellValue[21][0],
            }}/>
          )
        :<LoadingCard/>}
      

        {/* inoxi */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
          ref={inoxiRef}
          cell={{
            img:["inox.jpg"],
            title: cellValue[24][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[25][0],
            precio1: cellValue[25][1],
            modelo2: cellValue[26][0],
            precio2: cellValue[26][1],
            modelo3: cellValue[27][0],
            precio3: cellValue[27][1],
            customize: cellValue[28][0],
            customizePrice: cellValue[28][1],
            // en comun
            descuentosSubtitle: cellValue[17][0],
            descuento1: cellValue[18][0],
            descuento2: cellValue[19][0],
            descuento3: cellValue[20][0],
            descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}




        {/* bombilla para mate */}
        {Array.isArray(cellValue) ? 
          (
          <GenericCard 
            ref={bombillasRef}
            cell={{
            img:["bomb.jpg"],
            title: cellValue[32][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[33][0],
            precio1: cellValue[33][1],
            modelo2: cellValue[34][0],
            precio2: cellValue[34][1],
            // modelo3: cellValue[13][0],
            // precio3: cellValue[13][1],
            // customize: cellValue[14][0],
            // customizePrice: cellValue[14][1],
            // en comun
            descuentosSubtitle: cellValue[17][0],
            descuento1: cellValue[18][0],
            descuento2: cellValue[19][0],
            descuento3: cellValue[20][0],
            descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}

        {/* limpiador */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={limpiadorRef}
            cell={{
            img:["limp.jpg"],
            title: cellValue[36][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[37][0],
            precio1: cellValue[37][1],
            // modelo2: cellValue[12][0],
            // precio2: cellValue[12][1],
            // modelo3: cellValue[13][0],
            // precio3: cellValue[13][1],
            // customize: cellValue[14][0],
            // customizePrice: cellValue[14][1],
            descuentosSubtitle: cellValue[17][0],
            descuento1: cellValue[18][0],
            descuento2: cellValue[19][0],
            descuento3: cellValue[20][0],
            descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}

        {/* estuche de viaje */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={estucheRef}
            cell={{
            img:["est.jpg", "est pers.jpg"],
            title: cellValue[40][0],
            subtitle: cellValue[41][0],
            modelo1: cellValue[41][0],
            precio1: cellValue[41][1],
            modelo2: cellValue[42][0],
            precio2: cellValue[42][1],
            modelo3: cellValue[43][0],
            precio3: cellValue[43][1],
            customize: cellValue[44][0],
            customizePrice: cellValue[44][1],
            // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}


        {/* Exhibidor de cartulina 1 */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={gondolaRef}
            cell={{
            img:["10.jpg"],
            title: cellValue[48][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[49][0],
            precio1: cellValue[49][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            // customize: cellValue[44][0],
            // customizePrice: cellValue[44][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}


        {/* exhib cartulina 2 */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={mostradorRef}
            cell={{
            img:["kit4.jpg"],
            title: cellValue[53][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[54][0],
            precio1: cellValue[54][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            // customize: cellValue[44][0],
            // customizePrice: cellValue[44][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}


        {/* exhib cartulina 3 */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["cartu bom.jpg"],
            title: cellValue[58][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[59][0],
            precio1: cellValue[59][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            // customize: cellValue[44][0],
            // customizePrice: cellValue[44][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
       :<LoadingCard/>}



        {/* Exhibidor fibrofácil granel */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={mostradorRef}
            cell={{
            img:["IMG_9470.jpg", "23.jpg"],
            title: cellValue[63][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[64][0],
            precio1: cellValue[64][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            customize: cellValue[65][0],
            customizePrice: cellValue[65][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
       :<LoadingCard/>}



        {/* Exhibidor fibrofácil kit 4 x unidad */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["ex kit.jpg"],
            title: cellValue[68][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[69][0],
            precio1: cellValue[69][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            customize: cellValue[70][0],
            customizePrice: cellValue[70][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
       :<LoadingCard/>}



        {/* Exhibidor fibrofácil completo */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["ex completo.jpg"],
            title: cellValue[73][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[74][0],
            precio1: cellValue[74][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            customize: cellValue[75][0],
            customizePrice: cellValue[75][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
       :<LoadingCard/>}



        {/* Exhibidor fibrofácil premium */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["ex prem.jpg"],
            title: cellValue[78][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[79][0],
            precio1: cellValue[79][1],
            // modelo2: cellValue[42][0],
            // precio2: cellValue[42][1],
            // modelo3: cellValue[43][0],
            // precio3: cellValue[43][1],
            customize: cellValue[80][0],
            customizePrice: cellValue[80][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
      :<LoadingCard/>}



        {/* Personalizacion */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={personalizadosRef}
            cell={{
            img:["16.jpg", "20.jpg", "17.jpg", "19.jpg", "18.jpg", "21.jpg", "22.jpg"],
            title: cellValue[82][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[83][0],
            precio1: cellValue[83][1],
            modelo2: cellValue[84][0],
            precio2: cellValue[84][1],
            modelo3: cellValue[85][0],
            precio3: cellValue[85][1],
            // customize: cellValue[44][0],
            // customizePrice: cellValue[44][1],
            // // en comun
            // descuentosSubtitle: cellValue[17][0],
            // descuento1: cellValue[18][0],
            // descuento2: cellValue[19][0],
            // descuento3: cellValue[20][0],
            // descuento4: cellValue[21][0],
          }}/>
        )
      :<LoadingCard/>}

      </div>

      <div  style={{textAlign:"center", marginBottom:"10px", color:"grey"}}>
        <a href="https://github.com/joacomonte" >
          <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="40" height="40"
            viewBox="0 0 64 64">
            <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
          </svg>
          <p>Made by Montech</p> 
        </a>

      </div>


    </>
  );
}
