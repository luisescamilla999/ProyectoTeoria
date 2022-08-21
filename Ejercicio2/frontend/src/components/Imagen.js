import React from "react";
import styled from "styled-components";

import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";
import img10 from "../img/10.png";
import img11 from "../img/11.png";
import img12 from "../img/estacion.png";

const Imagen = (props) => {
  const idImagen = props.idImagen;

  const galeria2 = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <>
      <div>
        <Img src={galeria2[idImagen]}/>
      </div>
    </>
  );
};

export default Imagen;

const Img = styled.img`
  object-fit: cover;
  max-width: 400px;
  max-height: 278px;
  margin: auto;
`;
