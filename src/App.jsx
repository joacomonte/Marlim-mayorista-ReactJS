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
  const [cellValue, setCellValue] = useState('Cargando...');

  //useRefs
  const aluminioRef = useRef(); 
  const inoxiRef = useRef(); 
  const bombillasRef = useRef(); 
  const limpiadorRef = useRef(); 
  const estucheRef = useRef(); 
  const gondolaRef = useRef(); 
  const mostradorRef = useRef();




  // scrolls to the ref and then does a top margin correction
  function scrollWithOffset(argRef) {
    argRef.current.scrollIntoView();
    setTimeout(()=>  {window.scrollBy(0, -100)}, 700)
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
            <div onClick={ () =>  scrollWithOffset(mostradorRef)}>
              <MenuTile bgcolor='#72C765' cell={Array.isArray(cellValue) ? cellValue[7][0] : cellValue}/>
            </div>

      </div>
            
  
      <div className="cardsContainer">

        {/* Aluminio 1 */}
        {Array.isArray(cellValue) ? 
          (
            <GenericCard 
            ref={aluminioRef}
            cell={{
              
              img:["anodizado.png","bombillas.png", "inoxi.png"],
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
            ref={aluminioRef}
            cell={{
              
              img:["anodizado.png","bombillas.png", "inoxi.png"],
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
            ref={aluminioRef}
            cell={{
              
              img:["anodizado.png","bombillas.png", "inoxi.png"],
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
            img:["inoxi.png"],
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
            img:["bombillas.png"],
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
            img:["bombillas.png"],
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
            img:["bombillas.png"],
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


        {/* exhib cartulina 10 sorbetes */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={gondolaRef}
            cell={{
            img:["bombillas.png"],
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


        {/* exhib cartulina 4 sorbetes */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={mostradorRef}
            cell={{
            img:["bombillas.png"],
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


        {/* exhib cartulina 10 bombi */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["bombillas.png"],
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
            // ref={sinref}
            cell={{
            img:["bombillas.png"],
            title: cellValue[63][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[64][0],
            precio1: cellValue[64][1],
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



        {/* Exhibidor fibrofácil kit */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["bombillas.png"],
            title: cellValue[68][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[70][0],
            precio1: cellValue[70][1],
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



        {/* Exhibidor fibrofácil completo */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["bombillas.png"],
            title: cellValue[73][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[74][0],
            precio1: cellValue[74][1],
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



        {/* Exhibidor fibrofácil premium */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["bombillas.png"],
            title: cellValue[78][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[79][0],
            precio1: cellValue[79][1],
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



        {/* Personalizacion */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            // ref={sinref}
            cell={{
            img:["bombillas.png"],
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
    </>
  );
}
