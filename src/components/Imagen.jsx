import React from 'react'

const Imagen = (urlImagen) => { //acceder directamente a la propiedad, (urlImagen) es = a escribir (props) y abajo props.urlImagen
  return (
    <img src={urlImagen} className='mr-3' alt=""/>
    
  )
}

export default Imagen