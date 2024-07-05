import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {
    // estos son los useState que se vinculan con cada campo de texto
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {
        // e.preventDefult le quita la responsibilidad al navegador para continuar con los evento automaticos
        e.preventDefault()
        // console.log("manejar envio", e)
        // esta constante datosAEnviar es un objeto, que captura los estados
        const datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log("datos a enviar", datosAEnviar)

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingres tu nombre aquí"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo="Especialidad"
                placeholder="Ingres tu especialidad aquí"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingres el link de tu foto aquí"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario