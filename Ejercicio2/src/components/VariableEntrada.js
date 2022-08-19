import React, { useState } from "react";
import styled from "styled-components";
//import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CachedIcon from "@mui/icons-material/Cached";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "../style/EditarVariables.css";
//import Swal from "sweetalert2";

export const InputTypeInt = (props) => {
  const mensaje = props.mensaje;
  const tipoValidacion = props.tipoValidacion;
  const valorInicial = props.valorInicial;
  const valorMinimo = props.valorMinimo;
  const valorMaximo = props.valorMaximo;
  const isMaximo = props.isMaximo;
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombreCampo: "",
        }}
        validate={(valores) => {
          let errores = {};

          //valida el caso de que el campo este vacío
          if (!valores.nombreCampo) {
            errores.nombreCampo = "Este campo debe de llenarse.";
            setFormularioEnviado(false);
          } else if (
            //valida que el dato sea entero y positivo
            tipoValidacion === "int"
          ) {
            if (!/(^\d{1,10}$)/.test(valores.nombreCampo)) {
              errores.nombreCampo =
                "Este campo solo acepta valores enteros positivos.";
              setFormularioEnviado(false);
            } else if (
              !(valores.nombreCampo >= valorMinimo &&
              valores.nombreCampo <= valorMaximo) && (isMaximo)
            ) {
              errores.nombreCampo =
                "El valor minimo aceptado es " +
                valorMinimo +
                " y el valor máximo es " +
                valorMaximo;
              setFormularioEnviado(false);
            }
          } else if (
            //valida que el dato sea real y positivo
            !/(^\d{1,10}\.\d{1,2}$)/.test(valores.nombreCampo) &&
            tipoValidacion === "float"
          ) {
            errores.nombreCampo =
              "Este campo solo acepta valores positivos con un máximo de 2 números decimales.";
            setFormularioEnviado(false);
          } else if (
            //valida que el dato sea <= 100
            tipoValidacion === "porcentaje"
          ) {
            if (!(valores.nombreCampo >= 0 && valores.nombreCampo < 101)) {
              /*|| !/(^\d{1,10}\.\d{1,2}$)/.test(valores.nombreCampo)*/
              errores.nombreCampo =
                "Esta cantidad debe de estar en el rango [0,100]";
              setFormularioEnviado(false);
            } else if (!/(^\d{1,10}$)/.test(valores.nombreCampo)) {
              errores.nombreCampo = "Este campo solo acepta números";
              setFormularioEnviado(false);
            }
          }

          return errores;
        }}
        onSubmit={(valores) => {
          props.obtenerDato(valores.nombreCampo);
          setFormularioEnviado(true);
          //resetForm();
          //setTimeout(() => setFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario_edit">
            <div className="contenedor_Field_edit">
              <TextLabel>{mensaje}</TextLabel>
              <div className="contendor_Fiel_button">
                <Field
                  type="text"
                  id="nombreCampo"
                  name="nombreCampo"
                  placeholder={valorInicial}
                />
                <IconButton aria-label="refresh" edge="end" type="submit">
                  <CachedIcon />
                </IconButton>
                {formularioEnviado && [
                  <IconButton aria-label="succeful" edge="end">
                    <CheckCircleOutlineIcon color="success" />
                  </IconButton>,
                ]}
              </div>
            </div>
            <div className="contenedor_mensaje_error">
              <ErrorMessage
                name="nombreCampo"
                component={() => (
                  <div className="error_edit">{errors.nombreCampo}</div>
                )}
              />
            </div>
            {/*formularioEnviado && <p className="exito_edit">Listo!</p>*/}
          </Form>
        )}
      </Formik>
    </>
  );
};

const TextLabel = styled.div`
  background: "#FFFFFF";
  color: #000000;
  font-size: 17px;
  font-family: monospace;
  text-align: center;
  font-weight: 700;
  width: 430px;
  display: flex;
  align-items: center;
  /* background: red; */
`;
