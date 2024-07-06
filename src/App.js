import { useState } from "react";

import "./App.css";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import MiOrg from "./Components/MiOrg";
import Equipo from "./Components/Equipo";
import Footer from "./Components/Footer";

function App() {
  //HOOKS--
  // sintaxix de uso del useState(), este companente oculta o muestra el formulario
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  //este estado, actualiza la lista de colaboradores
  const [colaboradores, ActualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Front End",
    foto: "https://avatars.githubusercontent.com/u/85918673?s=400&u=42c4270af4f81bded17cf5d267645454b7422154&v=4",
    nombre: "César Gómez",
    puesto: "Diseño UI"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]);

  //registro de colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador:", registrarColaborador);
    //SPREAD OPERATOR [...lista, lista] toma una lista existente y agrega un objeto en la cola
    ActualizarColaboradores([...colaboradores, colaborador])
  };

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //lisata de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

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

      {equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter (colaborador => colaborador.equipo === equipo.titulo)}
        />
      )
    }
    <Footer/>
    </div>
  );
}

export default App;
