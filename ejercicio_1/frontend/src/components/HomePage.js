import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import Button from "@mui/material/Button";
import logo from "./Img/logo1.PNG";
import { TextFile } from "./TextFile";
import "../style/InputDate.css";

export const HomePage = () => {
  return (
    <MainContainer>
      <Navbar
        inicio={true}
        HistorialVentas={false}
        PronosticoVentas={false}
        EditarVariables={false}
      />
      <SecondContainer>
        <DataContainer>
          <Tittle>Bienvenido Pepito</Tittle>
          <TextLabel>¿Cuántos periódicos compraste?</TextLabel>
          <TextFile name="Cantidad de periódicos" />
          <TextLabel>¿De cuánto fue la demanda?</TextLabel>
          <TextFile name="Número entero" />
          <TextLabel>Fecha</TextLabel>
          <div className="form-date">
            <input
              className="form-date__input"
              type="date"
              id="input-date"
              name="input-date-start"
              defaultValue="2018–07–22"
            />
          </div>

          <Button
            variant="contained"
            key="Calcular tu ganancia"
            sx={{
              width: 228,
              height: 52,
              background: "#3A7D83",
              fontWeight: 1000,
              fontSize: 13,
              "&:hover": {
                bgcolor: "rgba(91, 165, 169, 0.9)",
                color: "#FFFFFF",
              },
            }}
          >
            Calcular tu ganancia
          </Button>
        </DataContainer>
        <ResultContainer>
          <ImgContainer>
            <Img src={logo} />
          </ImgContainer>
          <TextLabel colorFondo="#FFFFFF">Tu ganancia es de: </TextLabel>
          <ButtonContainer>
            <Button
              variant="contained"
              key=" Agregar al historial de ventas"
              sx={{
                width: 404,
                height: 52,
                background: "#3A7D83",
                fontWeight: 1000,
                fontSize: 13,
                "&:hover": {
                  bgcolor: "rgba(91, 165, 169, 0.9)",
                  color: "#FFFFFF",
                },
              }}
            >
              Agregar al historial de ventas
            </Button>
          </ButtonContainer>
        </ResultContainer>
      </SecondContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 1080px;
  min-width: 1080px;
  max-height: 624px;
  min-height: 624px;

  background: #ffffff;
  margin: 60px auto;
  border-radius: 5px;
  box-shadow: 1px 1px 30px -5px #20202049;
`;

const SecondContainer = styled.div`
  max-width: 1080px;
  min-height: 569px;
  max-height: 569px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;

const DataContainer = styled.div`
  width: 355px;
  height: 569px;
  background: #f6f6f6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ResultContainer = styled.div`
  width: 725px;
  height: 569px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.div`
  background: #f6f6f6;
  color: #3a7d83;
  font-size: 30px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  width: 355px;
  margin-top: 40px;
`;

const TextLabel = styled.div`
  background: ${(props) => (props.colorFondo ? props.colorFondo : "#f6f6f6")};
  color: #000000;
  font-size: 20px;
  font-family: monospace;
  text-align: center;
  font-weight: 700;
  width: 100%;
  margin-top: 30px;
`;

const ImgContainer = styled.div`
  width: 100%;
  max-height: 691px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

const Img = styled.img`
  object-fit: cover;
  max-width: 400px;
  max-height: 278px;
  margin: auto;
`;

const ButtonContainer = styled.div`
  height: 100%;
  margin-top: 30px;
`;
