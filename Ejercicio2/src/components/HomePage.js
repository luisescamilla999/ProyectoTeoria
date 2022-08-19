import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  Titulo,
  Subtitulo,
  ContenedorIzquierda,
  ContenedorDerecha,
  ContenedorGlobal,
} from "../style/HomePageStyled";
import { InputTypeInt } from "./VariableEntrada";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import { purple } from "@mui/material/colors";

export default function HomePage() {
  //variables de entrada
  const [cantitadVehiculos, setCantitadVehiculos] = useState(0);
  const [cantitadEstaciones, setCantitadEstaciones] = useState(0);
  const [cantitadCombustibleRegular, setCantitadCombustibleRegular] =
    useState(0);
  const [cantitadCombustibleDiesel, setCantitadCombustibleDiesel] = useState(0);
  const [cantitadCombustibleSuper, setCantitadCombustibleSuper] = useState(0);
  const [precioCompraCombustibleRegular, setPrecioCompraCombustibleRegular] =
    useState(0);
  const [precioCompraCombustibleDiesel, setPrecioCompraCombustibleDiesel] =
    useState(0);
  const [precioCompraCombustibleSuper, setPrecioCompraCombustibleSuper] =
    useState(0);
  const [precioVentaCombustibleRegular, setPrecioVentaCombustibleRegular] =
    useState(0);
  const [precioVentaCombustibleDiesel, setPrecioVentaCombustibleDiesel] =
    useState(0);
  const [precioVentaCombustibleSuper, setPrecioVentaCombustibleSuper] =
    useState(0);

  //variables de estado
  const [porcentajeAparicionVehiculos, setPorcentajeAparicionVehiculos] =
    useState(0);
  const [porcentajeAutosRegular, setPorcentajeAutosRegular] = useState(0);
  const [porcentajeAutosDiesel, setPorcentajeAutosDiesel] = useState(0);
  const [porcentajeAutosSuper, setPorcentajeAutosSuper] = useState(0);
  const [cantidadFuelVehiculoRegular, setCantidadFuelVehiculoRegular] =
    useState(0);
  const [cantidadFuelVehiculoDiesel, setCantidadFuelVehiculoDiesel] =
    useState(0);
  const [cantidadFuelVehiculoSuper, setCantidadFuelVehiculoSuper] = useState(0);
  const [cantidadLitrosSegundoEstacion, setCantidadLitrosSegundoEstacion] =
    useState(0);
  const [tiempoIntercambio, setTiempoIntercambio] = useState(0);

  const imprimirDatosVariablesEntrada = () => {
    console.log("Cantidad de vehículos: " + cantitadVehiculos);
    console.log("Cantidad de estaciones: " + cantitadEstaciones);
    console.log(
      "Cantidad de combustible regular: " + cantitadCombustibleRegular
    );
    console.log("Cantidad de combustible diésel: " + cantitadCombustibleDiesel);
    console.log("Cantidad de combustible super: " + cantitadCombustibleSuper);
    console.log(
      "Precio de compra del combustible regular: " +
        precioCompraCombustibleRegular
    );
    console.log(
      "Precio de compra del combustible diésel: " +
        precioCompraCombustibleDiesel
    );
    console.log(
      "Precio de compra del combustible super: " + precioCompraCombustibleSuper
    );
    console.log(
      "Precio de venta del combustible regular: " +
        precioVentaCombustibleRegular
    );
    console.log(
      "Precio de venta del combustible diésel: " + precioVentaCombustibleDiesel
    );
    console.log(
      "Precio de venta del combustible super: " + precioVentaCombustibleSuper
    );
  };

  return (
    <>
      <ContenedorGlobal>
        <ContenedorIzquierda>
          <Titulo>Bienvenido</Titulo>
          <Subtitulo>
            Por favor llene los campos para iniciar la simulación
          </Subtitulo>
          <div className="contenedor-campos">
            <div className="contenedor-campos__inputs">
              <InputTypeInt
                mensaje="Cantidad de vehículos: "
                obtenerDato={setCantitadVehiculos}
                tipoValidacion="int"
                valorInicial="[1,30]"
                valorMinimo={1}
                valorMaximo={30}
                isMaximo={true}
              />
              <InputTypeInt
                mensaje="Cantidad de estaciones: "
                obtenerDato={setCantitadEstaciones}
                tipoValidacion="int"
                valorInicial="[1,3]"
                valorMinimo={1}
                valorMaximo={3}
                isMaximo={true}
              />
              <InputTypeInt
                mensaje="Cantidad de combustible regular: "
                obtenerDato={setCantitadCombustibleRegular}
                tipoValidacion="int"
                //isMaximo={false}
              />
              <InputTypeInt
                mensaje="Cantidad de combustible diésel: "
                obtenerDato={setCantitadCombustibleDiesel}
                tipoValidacion="int"
                //isMaximo={false}
              />
              <InputTypeInt
                mensaje="Cantidad de combustible super: "
                obtenerDato={setCantitadCombustibleSuper}
                tipoValidacion="int"
                //isMaximo={false}
              />
              <InputTypeInt
                mensaje="Precio de compra del combustible regular: "
                obtenerDato={setPrecioCompraCombustibleRegular}
                tipoValidacion="float"
              />
              <InputTypeInt
                mensaje="Precio de compra del combustible diésel: "
                obtenerDato={setPrecioCompraCombustibleDiesel}
                tipoValidacion="float"
              />
              <InputTypeInt
                mensaje="Precio de compra del combustible super: "
                obtenerDato={setPrecioCompraCombustibleSuper}
                tipoValidacion="float"
              />
              <InputTypeInt
                mensaje="Precio de venta del combustible regular: "
                obtenerDato={setPrecioVentaCombustibleRegular}
                tipoValidacion="float"
              />
              <InputTypeInt
                mensaje="Precio de venta del combustible diésel: "
                obtenerDato={setPrecioVentaCombustibleDiesel}
                tipoValidacion="float"
              />
              <InputTypeInt
                mensaje="Precio de venta del combustible super: "
                obtenerDato={setPrecioVentaCombustibleSuper}
                tipoValidacion="float"
              />
              <Subtitulo>Variables de estado</Subtitulo>
              <InputTypeInt
                mensaje="% de aparición de los vehículos: "
                obtenerDato={setPorcentajeAparicionVehiculos}
                tipoValidacion="porcentaje"
                valorInicial={porcentajeAparicionVehiculos}
              />
              <InputTypeInt
                mensaje="% de autos que compran gasolina regular: "
                obtenerDato={setPorcentajeAutosRegular}
                tipoValidacion="porcentaje"
                valorInicial={porcentajeAutosRegular}
              />
              <InputTypeInt
                mensaje="% de autos que compran gasolina diésel: "
                obtenerDato={setPorcentajeAutosDiesel}
                tipoValidacion="porcentaje"
                valorInicial={porcentajeAutosDiesel}
              />
              <InputTypeInt
                mensaje="% de autos que compran gasolina super: "
                obtenerDato={setPorcentajeAutosSuper}
                tipoValidacion="porcentaje"
                valorInicial={porcentajeAutosSuper}
              />
              <InputTypeInt
                mensaje="Cantidad de fuel por vehículo regular: "
                obtenerDato={setCantidadFuelVehiculoRegular}
                tipoValidacion="int"
                valorInicial={cantidadFuelVehiculoRegular}
              />
              <InputTypeInt
                mensaje="Cantidad de fuel por vehículo diésel: "
                obtenerDato={setCantidadFuelVehiculoDiesel}
                tipoValidacion="int"
                valorInicial={cantidadFuelVehiculoDiesel}
              />
              <InputTypeInt
                mensaje="Cantidad de fuel por vehículo super: "
                obtenerDato={setCantidadFuelVehiculoSuper}
                tipoValidacion="int"
                valorInicial={cantidadFuelVehiculoSuper}
              />
              <InputTypeInt
                mensaje="Cantidad de litros por segundo de la estación: "
                obtenerDato={setCantidadLitrosSegundoEstacion}
                tipoValidacion="float"
                valorInicial={cantidadLitrosSegundoEstacion}
              />
              <InputTypeInt
                mensaje="tiempo promedio de intercambio: "
                obtenerDato={setTiempoIntercambio}
                tipoValidacion="int"
                valorInicial={tiempoIntercambio}
              />
              <Button onClick={imprimirDatosVariablesEntrada}>
                Ver valores de las variables de entrada
              </Button>
            </div>
          </div>
        </ContenedorIzquierda>
        <ContenedorDerecha>
          {/**************************************** */}
          <div className="contenedor-botones">
            <div className="contenedor-botones__fondo">
              <PlayCircleIcon sx={{ color: purple[50] }} />
            </div>
            <div className="contenedor-botones__fondo">
              <PauseCircleIcon sx={{ color: purple[50] }} />
            </div>
            <div className="contenedor-botones__fondo">
              <ReplayIcon sx={{ color: purple[50] }} />
            </div>
          </div>
          {/**************************************** */}
          <div className="contenedor-resultados">
            <div className="contenedor-resultados__elemento">
              <p>Tiempo estimado para terminar de atender la cola</p>
              <div className="contenedor-resultados__resultado">544</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de ganancia generada</p>
              <div className="contenedor-resultados__resultado">78587</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de perdida generada</p>
              <div className="contenedor-resultados__resultado">8578</div>
            </div>
          </div>
          {/**************************************** */}
          <div className="contenedor-resultados-animacion">
            hola soy el que te mostrara los resultados de tus calculos
          </div>
          {/**************************************** */}
          <div className="contenedor-resultados">
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de autos atendidos</p>
              <div className="contenedor-resultados__resultado">544</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Consumo promedio por el tipo de combustible</p>
              <div className="contenedor-resultados__resultado">78587</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Perdida por no cubrir con la demanda</p>
              <div className="contenedor-resultados__resultado">8578</div>
            </div>
          </div>
          {/**************************************** */}
        </ContenedorDerecha>
      </ContenedorGlobal>
    </>
  );
}
