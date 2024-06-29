import "./Formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = ()=>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder ="Ingres tu nombre aquí"/>
            <CampoTexto titulo="Especialidad" placeholder ="Ingres tu especialidad aquí"/>
            <CampoTexto titulo="Foto" placeholder ="Ingres el link de tu foto aquí"/>
        </form>
    </section>
}

export default Formulario