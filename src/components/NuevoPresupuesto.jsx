import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto,setPresupuesto,setIsValidPresupuesto }) => {

    const [ mensaje, setMensaje ] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje("No es un Presupuesto Valido");
            
            return
        }

        setMensaje("");
        setIsValidPresupuesto(true);
        console.log(presupuesto);
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>

            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input 
                            type="number" 
                            className='nuevo-presupuesto' 
                            value={presupuesto} 
                            onChange={ (e) => setPresupuesto(Number(e.target.value)) }
                            placeholder='Añade tu presupuesto'
                    />
                </div>

                <input type="submit" value="Añadir" />

                { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
            </form>
        </div>
    )
}

export default NuevoPresupuesto