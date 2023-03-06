import React,{ useState,useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupusto = ({gastos,setGastos,presupuesto,setPresupuesto,setIsValidPresupuesto}) => {

    const [disponible,setDisponible] = useState(0)
    const [gastado,setGastado] = useState(0)
    const [porcentaje,setPorcentaje] = useState(0)

    

    useEffect( () =>{
        const totalGastado = gastos.reduce( (total,gasto) => gasto.cantidad + total , 0);
        const totalDisponible = presupuesto - totalGastado;

        //Calcular el Porcentaje
        const nuevoPorcentaje = (((presupuesto - totalDisponible) /  (presupuesto ) * 100)).toFixed(2);
        
        
        setDisponible(totalDisponible);
        setGastado(totalGastado);

        setTimeout( ()=>{
            setPorcentaje(nuevoPorcentaje);
          },1500);
    },[gastos])

    const formatearCantidad = (cantidad) => {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return formatter.format(cantidad)
    }

    const handleResetApp = () =>{
        const resultado = confirm('¿Desea reiniciar App?');

        if(resultado){
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
        console.log('Reseteando App');
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas' >
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? 'red' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? 'red' : '#3B82F6'
                    })}
                    strokeWidth={10}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`} 
                />
            </div>

            <div className='contenido-presupuesto'>
                <button 
                    className='reset-app' 
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span> { formatearCantidad(presupuesto) }
                </p>

                <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                    <span>Disponible: </span> { formatearCantidad(disponible) }
                </p>

                <p>
                    <span>Gastado: </span> { formatearCantidad(gastado) }
                </p>
            </div>
        </div>
    )
}

export default ControlPresupusto