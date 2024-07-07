import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {
    // estos son los useState que se vinculan con cada campo de 
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    //Desturcturacion
    const { registrarColaborador, crearEquipo } = props

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
        registrarColaborador(datosAEnviar)
    }


    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingres tu nombre aquí"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Especialidad"
                placeholder="Ingres tu especialidad aquí"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
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
            <Boton texto="Crear colaborador" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingres titulo aquí"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingres el color en hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type ="color"
            />
            <Boton texto="Crear equipo" />
        </form>
    </section>
}

export default Formulario