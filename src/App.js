//IMPORTACIONES --
import { useState } from "react";
import { v4 as uuid} from "uuid";

import "./App.css";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import MiOrg from "./Components/MiOrg";
import Equipo from "./Components/Equipo";
import Footer from "./Components/Footer";

//FUNCION PRINCIPAL

function App() {
  //HOOKS-- estados

  // sintaxix de uso del useState(), este companente oculta o muestra el formulario
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  //Actualiza la lista de colaboradores
  const [colaboradores, ActualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://avatars.githubusercontent.com/u/85918673?s=400&u=42c4270af4f81bded17cf5d267645454b7422154&v=4",
      nombre: "César Gómez",
      puesto: "Diseño UI",
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
    },
  ]);
  //Actualiza lista de equipos
  const [equipos, actualizarEquios] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  // FUNCIONES --

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //registro de colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador:", registrarColaborador);
    //SPREAD OPERATOR [...lista, lista] toma una lista existente y agrega un objeto en la cola
    ActualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    ActualizarColaboradores(nuevosColaboradores)
  }; 

  //ACTUALIZAR COLOR DE EQUIPO
  const actualizarColor = (color, id) => {
    // Esta funcion recorre el useState de equipos, 
    const equipoActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquios(equipoActualizados);
  };

  // RETORNO --

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
