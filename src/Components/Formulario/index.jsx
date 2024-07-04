import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpcones"
import Boton from "../boton"

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingres tu nombre aquí" required />
            <CampoTexto titulo="Especialidad" placeholder="Ingres tu especialidad aquí" required />
            <CampoTexto titulo="Foto" placeholder="Ingres el link de tu foto aquí" required />
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario