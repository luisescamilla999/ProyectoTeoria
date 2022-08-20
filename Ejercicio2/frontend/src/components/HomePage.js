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
  //===================================================================
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
  //===================================================================
  //variables de estado
  const [porcentajeAparicionVehiculos, setPorcentajeAparicionVehiculos] =
    useState(20);
  const [porcentajeAutosRegular, setPorcentajeAutosRegular] = useState(50);
  const [porcentajeAutosDiesel, setPorcentajeAutosDiesel] = useState(30);
  const [porcentajeAutosSuper, setPorcentajeAutosSuper] = useState(20);
  const [cantidadFuelVehiculoRegular, setCantidadFuelVehiculoRegular] =
    useState(5);
  const [cantidadFuelVehiculoDiesel, setCantidadFuelVehiculoDiesel] =
    useState(10);
  const [cantidadFuelVehiculoSuper, setCantidadFuelVehiculoSuper] =
    useState(20);
  const [cantidadLitrosSegundoEstacion, setCantidadLitrosSegundoEstacion] =
    useState(3);
  const [tiempoIntercambio, setTiempoIntercambio] = useState(4);
  //===================================================================
  // variables de estado de programacion
  let infoColaAutos = [];
  let infoColaAutosTETC = [];
  let tipoGasolina = ["R", "D", "S"];
  let cantExistenteRegular = cantitadCombustibleRegular;
  let cantExistenteDiesel = cantitadCombustibleDiesel;
  let cantExistenteSuper = cantitadCombustibleSuper;
  //===================================================================
  // variables de salida
  const [varSalidaTETC, setVarSalidaTETC] = useState(0);
  const [varSalidaCGG, setVarSalidaCGG] = useState(0);
  const [varSalidaPCD, setVarSalidaPCD] = useState(0);
  const [varSalidaCPG, setVarSalidaCPG] = useState(0);
  const [varSalidaCAA, setVarSalidaCAA] = useState(0); //CAA cantidad de autos atendidos


  //===================================================================
  // Apartir de aquí son solo definiciones de funciones
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

  //generador de numeros pseudoaleatorios
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Funcion que se encargara de crear la cola de autos y la cantidad de
  // combustible que compraran todo de manera pseudoaleatoria
  const definirColaAutos = () => {
    //let idImagen = 0;
    let cantidadCompraSeleccionada = 0;
    let tipoGasolinaSeleccionada = 0;

    for (let i = 0; i < cantitadVehiculos; i++) {
      // generando numero pseudoaleatorio para el tipo de vehiculo
      // rango [1,11]
      //idImagen = getRandomInt(1, cantitadVehiculos);
      tipoGasolinaSeleccionada = tipoGasolina[getRandomInt(0, 2)];

      if (tipoGasolinaSeleccionada === "R") {
        cantidadCompraSeleccionada = getRandomInt(
          1,
          cantidadFuelVehiculoRegular
        );
      } else if (tipoGasolinaSeleccionada === "D") {
        cantidadCompraSeleccionada = getRandomInt(
          1,
          cantidadFuelVehiculoDiesel
        );
      } else if (tipoGasolinaSeleccionada === "R") {
        cantidadCompraSeleccionada = getRandomInt(1, cantidadFuelVehiculoSuper);
      }
      infoColaAutos.push({
        idImagen: getRandomInt(1, 11),
        tipoGasolina: tipoGasolinaSeleccionada,
        cantidadComprada: getRandomInt(1, cantidadCompraSeleccionada),
      });
      //console.log("Valor de la iteracion: " + i);
    }
    infoColaAutosTETC = infoColaAutos;
    console.log(infoColaAutos);
  };

  const calcularTETC = () => {
    let sumatoriaVelocidaLlenado = 0;
    let auxCompraRegular = 0;
    let auxCompraDiesel = 0;
    let auxCompraSuper = 0;

    infoColaAutosTETC.forEach((auto) => {
      if (auto.tipoGasolina === "R") {
        auxCompraRegular +=
          parseInt(auto.cantidadComprada) /
          parseInt(cantidadLitrosSegundoEstacion);
      } else if (auto.tipoGasolina === "D") {
        auxCompraDiesel +=
          parseInt(auto.cantidadComprada) /
          parseInt(cantidadLitrosSegundoEstacion);
      } else if (auto.tipoGasolina === "S") {
        auxCompraSuper +=
          parseInt(auto.cantidadComprada) /
          parseInt(cantidadLitrosSegundoEstacion);
      }

      sumatoriaVelocidaLlenado =
        (tiempoIntercambio *
          (auxCompraRegular + auxCompraDiesel + auxCompraSuper)) /
        cantitadEstaciones;
    });

    /* infoColaAutos.map((auto) => {
      if (auto.tipoGasolina === "R") {
        auxCompraRegular +=
          parseInt(auto.cantidadComprada) /
          parseInt(cantidadLitrosSegundoEstacion);
      } else if (auto.tipoGasolina === "D") {
        auxCompraDiesel +=
          parseInt(auto.cantidadComprada) /
          parseInt(cantidadLitrosSegundoEstacion);
      } else if (auto.tipoGasolina === "S") {
        auxCompraSuper +=
          parseInt(auto.cantidadComprada) /
          parseInt(cantidadLitrosSegundoEstacion);
      }

      sumatoriaVelocidaLlenado =
        (tiempoIntercambio *
          (auxCompraRegular + auxCompraDiesel + auxCompraSuper)) /
        cantitadEstaciones;
    }); */

    /* aux = (tiempoIntercambio * sumatoriaVelocidaLlenado) / cantitadEstaciones; */
    setVarSalidaTETC(sumatoriaVelocidaLlenado.toFixed(2));
    console.log(varSalidaTETC);
  };

  const iniciarEjecucion = () => {
    //let sumatoriaVelocidaLlenado = 0;
    let auxCompraRegular = 0;
    let auxCompraDiesel = 0;
    let auxCompraSuper = 0;
    let costos =
      cantitadCombustibleDiesel * precioCompraCombustibleDiesel +
      cantitadCombustibleRegular * precioCompraCombustibleRegular +
      setCantidadFuelVehiculoSuper * precioCompraCombustibleSuper;

    infoColaAutos.forEach((auto) => {
      // se calculan los valores para CGG y PDC
      if (auto.tipoGasolina === "R") {
        auxCompraRegular =
          parseInt(auto.cantidadComprada) *
          parseInt(precioVentaCombustibleRegular);

        if (cantExistenteRegular >= parseInt(auto.cantidadComprada)) {
          //si se atiende el auto y la compra se suma como cantidad vendida
          setVarSalidaCGG(varSalidaCGG + auxCompraRegular);
          setVarSalidaCAA(varSalidaCAA + 1);
          cantExistenteRegular -= parseInt(auto.cantidadComprada);
        } else {
          // no se atiende el auto y la compra se suma como
          //perdida por no atender la demanda
          setVarSalidaPCD(varSalidaPCD + auxCompraRegular);
        }
      } else if (auto.tipoGasolina === "D") {
        auxCompraDiesel =
          parseInt(auto.cantidadComprada) *
          parseInt(precioVentaCombustibleDiesel);

        if (cantExistenteDiesel >= parseInt(auto.cantidadComprada)) {
          //si se atiende el auto y la compra se suma como cantidad vendida
          setVarSalidaCGG(varSalidaCGG + auxCompraDiesel);
          setVarSalidaCAA(varSalidaCAA + 1);
          cantExistenteDiesel -= parseInt(auto.cantidadComprada);
        } else {
          // no se atiende el auto y la compra se suma como
          //perdida por no atender la demanda
          setVarSalidaPCD(varSalidaPCD + auxCompraDiesel);
        }
      } else if (auto.tipoGasolina === "S") {
        auxCompraSuper =
          parseInt(auto.cantidadComprada) *
          parseInt(precioVentaCombustibleRegular);

        if (cantExistenteSuper >= parseInt(auto.cantidadComprada)) {
          //si se atiende el auto y la compra se suma como cantidad vendida
          setVarSalidaCGG(varSalidaCGG + auxCompraSuper);
          setVarSalidaCAA(varSalidaCAA + 1);
          cantExistenteSuper -= parseInt(auto.cantidadComprada);
        } else {
          // no se atiende el auto y la compra se suma como
          //perdida por no atender la demanda
          setVarSalidaPCD(varSalidaPCD + auxCompraSuper);
        }
      }

      setVarSalidaCPG(varSalidaCGG - costos);
      // se calculan los valores de CPG
    });
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
                mensaje="Tiempo promedio de intercambio: "
                obtenerDato={setTiempoIntercambio}
                tipoValidacion="int"
                valorInicial={tiempoIntercambio}
              />
              <Button onClick={imprimirDatosVariablesEntrada}>
                Ver valores de las variables de entrada
              </Button>
              <Button onClick={definirColaAutos}>
                Ver resultados de la funcion de crear cola autos
              </Button>
              <Button onClick={calcularTETC}>Ver calcular el TETC</Button>
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
              <div className="contenedor-resultados__resultado">
                {varSalidaTETC}
              </div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de ganancia generada</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaCGG}
              </div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de perdida generada</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaCPG}
              </div>
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
              <div className="contenedor-resultados__resultado">{varSalidaCAA}</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Perdida por no cubrir con la demanda</p>
              <div className="contenedor-resultados__resultado">{varSalidaPCD}</div>
            </div>
          </div>
          {/**************************************** */}
          <div className="contenedor-resultados">
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de autos atendidos</p>
              <div className="contenedor-resultados__resultado">{varSalidaCAA}</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Consumo promedio por el tipo de combustible</p>
              <div className="contenedor-resultados__resultado">78587</div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Perdida por no cubrir con la demanda</p>
              <div className="contenedor-resultados__resultado">{varSalidaPCD}</div>
            </div>
          </div>
          {/**************************************** */}
        </ContenedorDerecha>
      </ContenedorGlobal>
    </>
  );
}
