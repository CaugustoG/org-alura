import { useState } from "react";

import "./App.css";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import MiOrg from "./Components/MiOrg";
import Equipo from "./Components/Equipo";

function App() {
  // sintaxix de uso del useState(), este companente oculta o muestra el formullario
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  // ternarios --> condicion seMuestra : NoSeMuestra

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
        <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => {
        console.log("equipo:", Equipo);
        return <Equipo datos={equipo} key={equipo.titulo} />;
      })}
    </div>
  );
}

export default App;
