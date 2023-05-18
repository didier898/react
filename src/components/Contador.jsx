import { React,useState } from "react"


const Contador = () => {
     const [contador,setContador]= useState(0)

     const aumentar =()=>{
        setContador(contador+1)
     }

     const decrementar =()=>{
        setContador(contador-1)
     }
 return (
  <div>
        <h1>contador </h1>
        <button onClick={aumentar}> Aumentar </button>
        <span>    {contador}   </span>
        <button onClick={decrementar}> decrementar </button>
    </div>
  )
}

export default Contador