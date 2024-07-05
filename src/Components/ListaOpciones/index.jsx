import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX / UI",
        "Móvil",
        "Innovación y Gestión",
    ]
    // esta funcion recibe el UseState actualizarEquipo de manera externa, desde el componente padre formulario.
    const ManejarCambio = (e)=>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    // section recibe el valor y al función onChance manejarCambio, que recibe el estado actualizarEquipo desde formulario.
    return <div className="lista-opciones">
        <label >Equipos</label>
        <select value={props.valor} onChange={ManejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => {
                return<option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones