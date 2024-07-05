import "./CampoTexto.css"

const CampoTexto = (props) => {
    // Esta constante modifica el placeholder
    const placeholderModificado = `${props.placeholder}...`
    // esta función la vinculamos con el evento onChange
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto