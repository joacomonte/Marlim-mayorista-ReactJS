import React, { } from "react";


const GenericCard = ({cell},ref) => {

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

  const imgPath= `src/assets/${img}`

  return (
    <div ref={ref} className="genericCard">
      {title && <h1>{title}</h1>}
      <div className="genericCard__imgContainer">
        {img ? <img src={imgPath} alt="img"></img> : <p>Imagen no disponible</p>}
      </div>
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