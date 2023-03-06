import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto,filtro,gastoFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>

        { filtro ? (
            <>
              <h2>{ gastoFiltrados.length ? 'Gastos' : 'No hay Gasto en esta Categoria' }</h2>
              {
                gastoFiltrados.map( gasto =>(
                  <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliminarGasto={eliminarGasto}
                  />
                ))
              }
            </>            
        ) : (
            <>
              <h2>{ gastos.length ? 'Gastos' : 'No hay Gasto aún' }</h2>
              {
                gastos.map( gasto =>(
                  <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliminarGasto={eliminarGasto}
                  />
                ))
              }
            </>
            
        ) }

    </div>
  )
}

export default ListadoGastos