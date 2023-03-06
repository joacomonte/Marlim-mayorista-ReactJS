import React, {useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";



const GenericCard = ({cell},ref) => {


  const [isClicked, setIsClicked] = useState(false);

  const {
    img,
    title,
    subtitle,
    modelo1,
    precio1,
    modelo2,
    precio2,
    modelo3,
    precio3,
    customize,
    customizePrice,
    descuentosSubtitle,
    descuento1,
    descuento2,
    descuento3,
    descuento4,
  } = cell;




  return (
    <div ref={ref} className="genericCard" name="toHere">
      {title && <h1>{title}</h1>}

      { img && img.length > 1 &&
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        
          {img.map((src, index) => (

            <SwiperSlide key={index}>
              <div className="genericCard__imgContainer" onClick={() => setIsClicked(!isClicked)}>
                {src ? <img src={`/${src}`} alt="img"></img> : <p>Imagen no disponible</p>}
              </div>
            </SwiperSlide>

          ))}
          
        </Swiper>
      }

      {img && img.length === 1 &&
      <div className="genericCard__imgContainer" onClick={() => setIsClicked(!isClicked)}>
            {img[0] ? <img src={`/${img[0]}`} alt="img"></img> : <p>Imagen no disponible</p>}
      </div>
      }

      <div className="genericCard__description">
        {subtitle && <h2>{subtitle}</h2>}
        {modelo1 && precio1 && <p>{modelo1}: {precio1}</p>}
        {modelo2 && precio2 && <p>{modelo2}: {precio2}</p>}
        {modelo3 && precio3 && <p>{modelo3}: {precio3}</p>}
        {customize && customizePrice && <p>{customize} {customizePrice}</p>}
        {descuentosSubtitle && <h2>{descuentosSubtitle}</h2>}
        {descuento1 && <p>{descuento1}</p>}
        {descuento2 && <p>{descuento2}</p>}
        {descuento3 && <p>{descuento3}</p>}
        {descuento4 && <p>{descuento4}</p>}
      </div>
    </div>

  );
}
export default React.forwardRef(GenericCard);