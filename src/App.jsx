// React Imports
import React, { useState, useEffect, useRef } from "react";
import GenericCard from "./components/GenericCard";

import fetchSheetData from "./helpers/fetchSheetData";

// components
import MenuTile from "./components/MenuTile";
import LoadingCard from "./components/LoadingCard";

// img
import menuBurger from "../public/menuBurger.png"




export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const aluminioRef = useRef();
  const inoxiRef = useRef();
  const bombillasRef = useRef();
  const limpiadorRef = useRef();
  const estucheRef = useRef();
  const gondolaRef = useRef();
  const mostradorRef = useRef();

  const [cellValue, setCellValue] = useState('Loading...');
  
  useEffect(() => {
    fetchSheetData(import.meta.env.VITE_SPREADSHEET_ID, 'hoja1', import.meta.env.VITE_API_KEY)
      .then((data) => {
        if (data.values && data.values.length > 0) {
          setCellValue(data.values);
          // log the value after it's been fetched and set in state
        } else {
          setCellValue('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
        setCellValue('Error loading data');
      });

  }, []);


  return (
    <>
      {/* Marlim */}



      <div className="navBar"> MARLIM
        <div className="navBar__img" onClick={handleMenuButtonClick}>
          <img src={menuBurger}/>
        </div>
        <div className={`sideMenu ${isMenuOpen ? 'active' : ''}`}>
          <div>
            <div className="navBar__img" onClick={handleMenuButtonClick}>
              <img src={menuBurger}/>
            </div>
            <div className="sideMenu__titles">
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => aluminioRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[0][0] : cellValue}
              </button>
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => inoxiRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[1][0] : cellValue}
              </button>
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => bombillasRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[2][0] : cellValue}
              </button>
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => limbuttoniadorRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[3][0] : cellValue}
              </button>
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => estucheRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[4][0] : cellValue}
              </button>
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => gondolaRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[5][0] : cellValue}
              </button>
              <button 
                className="sideMenu__titles__title"  style={{cursor:"pointer"}}
                onClick={() => mostradorRef.current.scrollIntoView()}>
                    {Array.isArray(cellValue) ? cellValue[6][0] : cellValue}
              </button>

            </div>
          </div>

        </div>

      </div>


      {/* Sorbetes de colores - Alumino anodizado */}
      <div onClick={() => aluminioRef.current.scrollIntoView()}>
        <MenuTile bgcolor="#F2C819" cell={Array.isArray(cellValue) ? cellValue[0][0] : cellValue} />
      </div>

      {/* Sorbetes de acero inoxidable */}
      <div onClick={() => inoxiRef.current.scrollIntoView()}>
        <MenuTile bgcolor='#FF8734' cell={Array.isArray(cellValue) ? cellValue[1][0] : cellValue}/>
      </div>

      {/* Bombillas para mate */}
      <div onClick={() => bombillasRef.current.scrollIntoView()} >
        <MenuTile bgcolor='#E74741' cell={Array.isArray(cellValue) ? cellValue[2][0] : cellValue}/>
      </div>
        
      {/* Limpiador de cerda */}
      <div onClick={() => limpiadorRef.current.scrollIntoView()} >
        <MenuTile bgcolor='#FF8AC5' cell={Array.isArray(cellValue) ? cellValue[3][0] : cellValue}/>
      </div>
        
      {/* Estuche de viaje */}
      <div onClick={() => estucheRef.current.scrollIntoView()} >
        <MenuTile bgcolor='#ED12ED' cell={Array.isArray(cellValue) ? cellValue[4][0] : cellValue}/>
      </div>
       
      {/* Exhibidores para góndola */}
      <div onClick={() => gondolaRef.current.scrollIntoView()} >
        <MenuTile bgcolor='#1A4BB2' cell={Array.isArray(cellValue) ? cellValue[5][0] : cellValue}/>
      </div>
       
      {/* Exhibidores para mostrador */}
      <div onClick={() => mostradorRef.current.scrollIntoView()} >
        <MenuTile bgcolor='#0AB8F8' cell={Array.isArray(cellValue) ? cellValue[6][0] : cellValue}/>
      </div>
  
      <div className="cardsContainer">

        {/* Sorbetes de colores - Alumino anodizado */}
        {Array.isArray(cellValue) ? 
          (
            <GenericCard 
            ref={aluminioRef}
            cell={{
              img:"anodizado.png",
              title: cellValue[9][0],
              subtitle: cellValue[10][0],
              modelo1: cellValue[11][0],
              precio1: cellValue[11][1],
              modelo2: cellValue[12][0],
              precio2: cellValue[12][1],
              modelo3: cellValue[13][0],
              precio3: cellValue[13][1],
              customize: cellValue[14][0],
              customizePrice: cellValue[14][1],
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
            img:"inoxi.png",
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
            img:"bombillas.png",
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
            title: cellValue[40][0],
            // subtitle: cellValue[10][0],
            modelo1: cellValue[41][0],
            precio1: cellValue[41][1],
            modelo2: cellValue[42][0],
            precio2: cellValue[42][1],
            modelo3: cellValue[43][0],
            precio3: cellValue[43][1],
            customize: cellValue[44][0],
            customizePrice: cellValue[44][1],
            // en comun
            descuentosSubtitle: cellValue[17][0],
            descuento1: cellValue[18][0],
            descuento2: cellValue[19][0],
            descuento3: cellValue[20][0],
            descuento4: cellValue[21][0],
          }}/>
        )
        :<LoadingCard/>}


        {/* exhib cartulina 10 sorbetes */}
        {Array.isArray(cellValue) ? 
        (
          <GenericCard 
            ref={gondolaRef}
            cell={{
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


      </div>
    </>
  );
}

// // helpers
// import fetchSheetData from "./helpers/fetchSheetData";

// const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;
// const API_KEY = import.meta.env.VITE_API_KEY;
// const RANGE = "hoja1!C1"; // The cell you want to retrieve

// const [cellValues, setCellValues] = useState([]);

// useEffect(() => {
//   fetchSheetData(SPREADSHEET_ID, RANGE, API_KEY)
//     .then((data) => setCellValues(JSON.stringify(data, null, 2)))
//     .catch((error) => console.error(error));
// }, []);