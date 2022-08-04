import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
/* import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"; */
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
/* import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"; */

export const EditVariables = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <MainContainer>
      <Navbar
        inicio={false}
        HistorialVentas={false}
        PronosticoVentas={false}
        EditarVariables={true}
      />
      <DataContainer>
        <Tittle>Defina el valor del costo y su precio de venta</Tittle>
        <TextLabel>
          Valor de compra del periódico:
          <FormControl
            sx={{ m: 1, width: "10ch" }}
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Actualizar
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              //type={values.showPassword ? "text" : "password"}
              //value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <CachedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </TextLabel>
        <TextLabel>
          Valor de la venta del periódico:{" "}
          <FormControl
            sx={{ m: 1, width: "10ch" }}
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Actualizar
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              //type={values.showPassword ? "text" : "password"}
              //value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <CachedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </TextLabel>
        <TextLabel>
          Valor de venta del periódico reciclado:{" "}
          <FormControl
            sx={{ m: 1, width: "10ch" }}
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Actualizar
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              //type={values.showPassword ? "text" : "password"}
              //value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <CachedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </TextLabel>
        <ButtonContainer>
          <Button
            variant="contained"
            key=" Agregar al historial de ventas"
            sx={{
              width: 300,
              height: 52,
              background: "#3A7D83",
              fontWeight: 1000,
              fontSize: 16,
              "&:hover": {
                bgcolor: "rgba(91, 165, 169, 0.9)",
                color: "#FFFFFF",
              },
            }}
          >
            Guardar cambios
          </Button>
        </ButtonContainer>
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

const DataContainer = styled.div`
  /* max-width: 355px;
  min-height: 569px;
  max-height: 569px; */
  width: 100%;
  height: 569px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.div`
  background: #ffffff;
  color: #3a7d83;
  font-size: 34px;
  font-family: monospace;
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-top: 40px;
`;

const TextLabel = styled.div`
  /* background: #f6f6f6; */
  background: "#FFFFFF";
  color: #000000;
  font-size: 24px;
  font-family: monospace;
  text-align: center;
  font-weight: 700;
  width: 700px;
  margin-top: 30px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const ButtonContainer = styled.div`
  height: 100%;
  margin-top: 30px;
`;
