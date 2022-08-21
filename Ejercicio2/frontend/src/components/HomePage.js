import React, { useState } from "react";
import Imagen from "./Imagen";
import { InputTypeInt } from "./VariableEntrada";
import {
  Titulo,
  Subtitulo,
  ContenedorIzquierda,
  ContenedorDerecha,
  ContenedorGlobal,
  ContenedorResultados,
} from "../style/HomePageStyled";
import { Button } from "@mui/material";
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
  const [idImagenAuto, setIdImagenAuto] = useState();

  //===================================================================
  // variables de salida
  let [varSalidaTETC, setVarSalidaTETC] = useState(0);
  let [varSalidaCGG, setVarSalidaCGG] = useState(0);
  let [varSalidaPCD, setVarSalidaPCD] = useState(0);
  let [varSalidaCPG, setVarSalidaCPG] = useState(0);
  let [varSalidaCAA, setVarSalidaCAA] = useState(0); //CAA cantidad de autos atendidos
  const [varSalidaCPCR, setVarSalidaCPCR] = useState(0);
  const [varSalidaCPCD, setVarSalidaCPCD] = useState(0);
  const [varSalidaCPCS, setVarSalidaCPCS] = useState(0);
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

  function handelChangeIdImagen(val) {
    setIdImagenAuto(val);
    console.log("Pintando auto con el id: " + val);
  }

  //generador de numeros pseudoaleatorios con probabilidades
  function getRandomProbability(R, S) {
    let ResultP = "";
    var n100 = Math.floor(Math.random() * 100 + 1);

    if (n100 <= R) {
      ResultP = "R";
    } else if (n100 <= R + S) {
      ResultP = "S";
    } else {
      ResultP = "D";
    }

    return ResultP;
  }

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
      tipoGasolinaSeleccionada = getRandomProbability(
        porcentajeAutosRegular,
        porcentajeAutosSuper
      );

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

    setVarSalidaTETC(sumatoriaVelocidaLlenado.toFixed(2));
    console.log(varSalidaTETC);
  };

  let time = 100;
  let cont = 0;
  let salidaCGG = 0;
  let salidaPCD = 0;
  let salidaCAA = 0;
  let auxCompraRegular = 0;
  let auxCompraDiesel = 0;
  let auxCompraSuper = 0;
  let auxAcumTCR = 0;
  let auxAcumTCD = 0;
  let auxAcumTCS = 0;
  let auxPromedioCombustible = 0;
  let costos = 0;
  let auxIdImagen = 0;

  const iniciarEjecucion = () => {
    definirColaAutos();
    calcularTETC();
    //let sumatoriaVelocidaLlenado = 0;
    costos =
      cantitadCombustibleDiesel * precioCompraCombustibleDiesel +
      cantitadCombustibleRegular * precioCompraCombustibleRegular +
      cantidadFuelVehiculoSuper * precioCompraCombustibleSuper;

    console.log(
      "prueba del valor del costo: " + costos + " salida: " + salidaCGG
    );

    definirColaAutos();
    console.log("se ejecuta" + infoColaAutos.length);
    let i = 0;
    //infoColaAutos.forEach((auto) =>
    for (i; i < infoColaAutos.length; i++) {
      setTimeout(() => {
        auxIdImagen = infoColaAutos[cont].idImagen;
        console.log("entra vehiculo: " + cont + " idImagen: " + auxIdImagen);
        handelChangeIdImagen(auxIdImagen);
      }, time);

      /* setIdImagenAuto(parseInt(infoColaAutos[i].idImagen)); */

      time +=
        tiempoIntercambio * 1000 +
        (infoColaAutos[i].cantidadComprada / cantidadLitrosSegundoEstacion) *
          1000;

      setTimeout(() => {
        console.log("se ejecuta el time");
        // se calculan los valores para CGG y PDC
        if (infoColaAutos[cont].tipoGasolina === "R") {
          auxCompraRegular =
            parseInt(infoColaAutos[cont].cantidadComprada) *
            parseInt(precioVentaCombustibleRegular);

          if (
            cantExistenteRegular >=
            parseInt(infoColaAutos[cont].cantidadComprada)
          ) {
            //si se atiende el auto y la compra se suma como cantidad vendida
            setVarSalidaCGG(salidaCGG + auxCompraRegular);
            salidaCGG += auxCompraRegular;
            setVarSalidaCAA(salidaCAA + 1);
            salidaCAA++;
            cantExistenteRegular -= parseInt(
              infoColaAutos[cont].cantidadComprada
            );
            auxAcumTCR += parseInt(infoColaAutos[cont].cantidadComprada);
            auxPromedioCombustible = auxAcumTCR / salidaCAA;
            auxPromedioCombustible = auxPromedioCombustible.toFixed(2);
            setVarSalidaCPCR(auxPromedioCombustible);
          } else {
            // no se atiende el auto y la compra se suma como
            //perdida por no atender la demanda
            setVarSalidaPCD(salidaPCD + auxCompraRegular);
            salidaPCD += auxCompraRegular;
          }
        } else if (infoColaAutos[cont].tipoGasolina === "D") {
          auxCompraDiesel =
            parseInt(infoColaAutos[cont].cantidadComprada) *
            parseInt(precioVentaCombustibleDiesel);

          if (
            cantExistenteDiesel >=
            parseInt(infoColaAutos[cont].cantidadComprada)
          ) {
            //si se atiende el auto y la compra se suma como cantidad vendida
            setVarSalidaCGG(salidaCGG + auxCompraDiesel);
            salidaCGG += auxCompraDiesel;
            setVarSalidaCAA(salidaCAA + 1);
            salidaCAA++;
            cantExistenteDiesel -= parseInt(
              infoColaAutos[cont].cantidadComprada
            );
            auxAcumTCD += parseInt(infoColaAutos[cont].cantidadComprada);
            auxPromedioCombustible = auxAcumTCD / salidaCAA;
            auxPromedioCombustible = auxPromedioCombustible.toFixed(2);
            setVarSalidaCPCD(auxPromedioCombustible);
          } else {
            // no se atiende el auto y la compra se suma como
            //perdida por no atender la demanda
            setVarSalidaPCD(salidaPCD + auxCompraDiesel);
            salidaPCD += auxCompraDiesel;
          }
        } else if (infoColaAutos[cont].tipoGasolina === "S") {
          auxCompraSuper =
            parseInt(infoColaAutos[cont].cantidadComprada) *
            parseInt(precioVentaCombustibleRegular);

          if (
            cantExistenteSuper >= parseInt(infoColaAutos[cont].cantidadComprada)
          ) {
            //si se atiende el auto y la compra se suma como cantidad vendida
            setVarSalidaCGG(salidaCGG + auxCompraSuper);
            salidaCGG += auxCompraSuper;
            setVarSalidaCAA(salidaCAA + 1);
            salidaCAA++;
            cantExistenteSuper -= parseInt(
              infoColaAutos[cont].cantidadComprada
            );
            auxAcumTCS += parseInt(infoColaAutos[cont].cantidadComprada);
            auxPromedioCombustible = auxAcumTCS / salidaCAA;
            auxPromedioCombustible = auxPromedioCombustible.toFixed(2);
            setVarSalidaCPCS(auxPromedioCombustible);
          } else {
            // no se atiende el auto y la compra se suma como
            //perdida por no atender la demanda
            setVarSalidaPCD(salidaPCD + auxCompraSuper);
            salidaPCD += auxCompraSuper;
          }
        }
        console.log(salidaCGG + "  " + costos);

        setVarSalidaCPG(salidaCGG - costos);

        //animacion de salida del vehiculo
        console.log("sale el vehiculo " + cont);

        cont++;
        // se calculan los valores de CPG
      }, time);
      time += tiempoIntercambio * 1000;
    }
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
              {/* <Button onClick={imprimirDatosVariablesEntrada}>
                Ver valores de las variables de entrada
              </Button>
              <Button onClick={definirColaAutos}>
                Ver resultados de la funcion de crear cola autos
              </Button>
              <Button onClick={calcularTETC}>Ver calcular el TETC</Button>
              <Button onClick={iniciarEjecucion}>ver ejecucion</Button> */}
            </div>
          </div>
        </ContenedorIzquierda>
        <ContenedorDerecha timeAnimation={parseInt(tiempoIntercambio) * 2}>
          {/**************************************** */}
          <div className="contenedor-botones">
            <div className="contenedor-botones__fondo">
              <PlayCircleIcon
                onClick={iniciarEjecucion}
                sx={{ color: purple[50] }}
              />
            </div>
            <div className="contenedor-botones__fondo">
              <PauseCircleIcon sx={{ color: purple[50] }} />
            </div>
            <div className="contenedor-botones__fondo">
              <a href="/">
                <ReplayIcon
                  sx={{ color: purple[50] }}
                />
              </a>
            </div>
          </div>
          {/**************************************** */}
          <ContenedorResultados>
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
          </ContenedorResultados>
          {/**************************************** */}
          <div className="contenedor-resultados-animacion">
            <div className="Contenedor-resultados-animacion__gasolinera">
              <Imagen idImagen={11} />
            </div>
            {idImagenAuto === 0 && [
              <div className="Contenedor-resultados-animacion__auto">
                {/* {setTimeout(() => setIdImagenAuto(idImagenAuto + 1), 16000)} */}
                <Imagen idImagen={0} />
              </div>,
            ]}
            {idImagenAuto === 1 && [
              <div className="Contenedor-resultados-animacion__auto">
                {/* {setTimeout(() => setIdImagenAuto(idImagenAuto + 1), 16000)} */}
                <Imagen idImagen={1} />
              </div>,
            ]}
            {idImagenAuto === 2 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={2} />
              </div>,
            ]}
            {idImagenAuto === 3 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={3} />
              </div>,
            ]}
            {idImagenAuto === 4 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={4} />
              </div>,
            ]}
            {idImagenAuto === 5 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={5} />
              </div>,
            ]}
            {idImagenAuto === 6 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={6} />
              </div>,
            ]}
            {idImagenAuto === 7 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={7} />
              </div>,
            ]}
            {idImagenAuto === 8 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={8} />
              </div>,
            ]}
            {idImagenAuto === 9 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={9} />
              </div>,
            ]}
            {idImagenAuto === 10 && [
              <div className="Contenedor-resultados-animacion__auto">
                <Imagen idImagen={10} />
              </div>,
            ]}
          </div>
          {/**************************************** */}
          <ContenedorResultados columnas="span 3">
            <div className="contenedor-resultados__elemento">
              <p>Cantidad de autos atendidos</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaCAA}
              </div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Perdida por no cubrir con la demanda</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaPCD}
              </div>
            </div>
          </ContenedorResultados>
          {/**************************************** */}
          <ContenedorResultados>
            <div className="contenedor-resultados__elemento">
              <p>Consumo promedio de combustible regular</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaCPCR}
              </div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Consumo promedio de combustible diésel</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaCPCD}
              </div>
            </div>
            <div className="contenedor-resultados__elemento">
              <p>Consumo promedio combustible super</p>
              <div className="contenedor-resultados__resultado">
                {varSalidaCPCS}
              </div>
            </div>
          </ContenedorResultados>
          {/**************************************** */}
        </ContenedorDerecha>
      </ContenedorGlobal>
    </>
  );
}
