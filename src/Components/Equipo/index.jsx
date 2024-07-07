import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    //destructuracion del objeto datos
    const { colorPrimario, titulo , id} = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor } = props

    //console.log(colaboradores.length > 0)


    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.3)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <> {colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario, 0.3)}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
            
            
            
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                    />)
                }
            </div>
        </section>}
    </>
}

export default Equipo