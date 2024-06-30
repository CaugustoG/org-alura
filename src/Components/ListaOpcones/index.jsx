import "./ListaOpciones.css"

const ListaOpciones = () => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX / UI",
        "Móvil",
        "Innovación y Gestión",
    ]

    return <div className="lista-opciones">
        <label >Equipos</label>
        <select>
            {equipos.Map((equipo, index) => <option key="index">{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones