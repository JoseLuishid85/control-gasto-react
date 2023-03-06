import React,{ useState,useEffect } from 'react'

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtar Gastos</label>
                <select 
                    value={filtro}
                    onChange={ e => setFiltro(e.target.value) }
                >
                        <option value='' >-- Todas las Categorias --</option>
                        <option value='ahorro' >Ahorro</option>
                        <option value='comida' >Comida</option>
                        <option value='casa' >Casa</option>
                        <option value='gasto' >Gasto</option>
                        <option value='ocio' >Ocio</option>
                        <option value='salud' >Salud</option>
                        <option value='suscripcion' >Suscripción</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros