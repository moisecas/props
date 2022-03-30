import React from "react";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  return ( //uso de props, le damos un valor y ese valor lo incluimos dentro del componente, para este caso, a Saludo.jsx
    <div className="container mt-5">
      <h1>Proyecto desde 0</h1>
      <Saludo persona="moises" edad = {30} /> 
      <Saludo persona="david" edad = {20} />
      <Saludo persona="angelica" edad = {25} />
      <hr/> 
      <h3>Caja de comentarios</h3> 
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona="moises"
        texto="la selección no clasifico al mundial"
      /> 
      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona="david"
        texto="es una pena por los jugadores y el dt"
      /> 

      <Comentario 
        urlImagen='https://picsum.photos/64'
        persona="angelica"
        texto="para el otro será, clasifican 7 selecciones"


      /> 
    </div> 
  );//los numeros van entre {} para los props 
}

export default App;
