import React from "react";

//Importaciones de Material UI
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ButtonNavBar } from "./ButtonNavBar";

export const Navbar = (props) => {
  const inicio = props.inicio;
  const HistorialVentas = props.HistorialVentas;
  const PronosticoVentas = props.PronosticoVentas;
  const EditarVariables = props.EditarVariables;

  const buttons = [
    <ButtonNavBar
      myHrf="/"
      key="Inicio"
      name="Inicio"
      NewBackground={inicio}
    />,
    <ButtonNavBar
      myHrf="/history-page"
      key="Historial de ventas"
      name="Historial de ventas"
      NewBackground={HistorialVentas}
    />,
    <ButtonNavBar
      myHrf="/sales-forecast"
      key="Pronostico de ventas"
      name="Pronostico de ventas"
      NewBackground={PronosticoVentas}
    />,
    <ButtonNavBar
      myHrf="/edit-variables"
      key="Editar variables"
      name="Editar variables"
      NewBackground={EditarVariables}
    />,
  ];

  return (
    <>
      <Box
        sx={{
          width: 1080,
          height: 55,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: 1,
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>
    </>
  );
};
