import styled from "styled-components";

export const ContenedorGlobal = styled.div`
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15px;
  /* background: red; */
  margin: 15px;
`;

export const ContenedorIzquierda = styled.div`
  /* background: gray; */
  background-color: #F6F6F6;
  padding: 10px;
`;

export const Titulo = styled.div`
  /* background: #ffffff; */
  color: #3a7d83;
  font-size: 34px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;
`;

export const Subtitulo = styled.div`
  /* background: #ffffff; */
  color: #3a7d83;
  font-size: 18px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px;
`;

export const ContenedorDerecha = styled.div`
    /* background: yellow; */
    width: 900px;
    height: 900px;
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(6, 1fr); */
    .contenedor-botones {
        display: flex;
        justify-content: right;
    }
    .contenedor-botones__fondo {
        background: #3a7d83;
        margin: 10px;
        padding: 8px;
        border-radius: 8px;
    }

    .contenedor-resultados {
        /* background: green; */
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        /* grid-column: span 6; */
    }

    .contenedor-resultados__elemento {
        /* background: green; */

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        font-size: 16px;
        padding: 5px;
        grid-column: span 2;

    }

    .contenedor-resultados__elemento p{
        /* background: orange; */
        /* border: 1px solid black; */
        font-weight: 600;
        color:  #3a7d83;
    }

    .contenedor-resultados__elemento div{
        background: #D9D9D9;
        border: 1px solid black;
        width: 50%;
        border-radius: 5px;
    }

    .contenedor-resultados-animacion {
        /* background: purple; */
        /* grid-column: span 3; */
    }

    .contenedor-resultados-bottom {
        /* background: pink; */
        /* grid-column: span 6; */
    }
`;

