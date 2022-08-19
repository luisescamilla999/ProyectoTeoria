import React from 'react'
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

const Imagen = () => {
    /* const galeria = [
        { "imagen": "../img/1.png"},
        { "imagen": "img2"},
        { "imagen": "../img/3.png"},
        { "imagen": "../img/4.png"},
        { "imagen": "../img/5.png"},
        { "imagen": "../img/6.png"},
        { "imagen": "../img/7.png"},
        { "imagen": "../img/8.png"},
        { "imagen": "../img/9.png"},
        { "imagen": "../img/10.png"},
        { "imagen": "../img/11.png"},
      ] */

      /* const galeria2 = [
        img1,
        img2,
      ] */
      /* console.log(galeria);
      console.log(galeria[0]);
      console.log(galeria[1].imagen);

      const idImagen = "2";
      console.log(`img${idImagen}`); */


  return (
    <>
        <div>
            {/* <Img src={`img${idImagen}`}/> */}
            <Img src={img1}/>
            <Img src={img2}/>
            <Img src={img3}/>
            <Img src={img4}/>
            <Img src={img5}/>
            <Img src={img6}/>
            <Img src={img7}/>
            <Img src={img8}/>
            <Img src={img9}/>
            <Img src={img10}/>
            <Img src={img11}/>

            {/* <Img src={galeria2[1].imagen}/> */}
        </div>
        <div>
            agesag
        </div>
    </>
  )
}

export default Imagen

const Img = styled.img`
  object-fit: cover;
  max-width: 400px;
  max-height: 278px;
  margin: auto;
`;