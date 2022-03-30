import React from 'react'

const Saludo = (props) => { //los props son los que definimos en App.js 
    console.log(props) 
  return (
    <div>
        <h1>Saludar a: {props.persona}</h1> 
        <p>Edad: {props.edad}</p> 
    </div>
  )
}

export default Saludo