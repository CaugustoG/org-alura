import "./Campo.css"

const Campo = (props) => {
    // Esta constante modifica el placeholder
    const placeholderModificado = `${props.placeholder}...`
    // esta función la vinculamos con el evento onChange

    //destructuracion
    const { type = "text" } = props

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}

        />
    </div>
}

export default Campo