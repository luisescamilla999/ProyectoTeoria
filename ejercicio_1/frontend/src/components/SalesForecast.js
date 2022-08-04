import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import TextField from '@mui/material/TextField';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box"

export const SalesForecast = () => {
  const [method, setMethod] = useState("");

  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  return (
    <MainContainer>
      <Navbar
        inicio={false}
        HistorialVentas={false}
        PronosticoVentas={true}
        EditarVariables={false}
      />
      <ChartContainer>
        <Tittle>Espacio reservado para el gráfico</Tittle>
      </ChartContainer>
      <DataContainer>
        <TextLabel>Método a utilizar:</TextLabel>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="method-select">Método</InputLabel>
          <Select
            labelId="method-select"
            id="method-select"
            value={method}
            label="method"
            onChange={handleChangeMethod}
          >
            <MenuItem value={10}>Método de incremento porcentual</MenuItem>
            <MenuItem value={20}>Método de mínimos cuadrados</MenuItem>
            <MenuItem value={30}>Método de tendencias</MenuItem>
          </Select>
        </FormControl>
        <TextLabel>Cantidad de días a pronosticar:</TextLabel>
        <Box
        sx={{
          width: 150,
          marginLeft: 1,
        }}
      >
        <TextField label="Número entero" size="small" />
      </Box>
      </DataContainer>
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

const ChartContainer = styled.div`
  max-width: 1080px;
  min-width: 1080px;
  height: 400px;
  min-height: 350px;
  background: #f6f6f6;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Tittle = styled.div`
  background: #f6f6f6;
  color: #3a7d83;
  font-size: 30px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-top: 40px;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 150px;
`;

const TextLabel = styled.div`
  color: #3a7d83;
  font-size: 22px;
  font-family: monospace;
  text-align: center;
  font-weight: 900;
`;
