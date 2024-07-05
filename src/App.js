import { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import MiOrg from './Components/MiOrg';

function App() {
  // sintaxix de uso del useState()
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  // ternarios --> condicion seMuestra : NoSeMuestra

  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
