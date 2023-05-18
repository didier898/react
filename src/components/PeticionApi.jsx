import React from 'react'

const PeticionApi = () => {
    const [personajes,setPersonajes]=React.useState([])
    const[paginacion,setPaginacion]= React.useState(0)
    const TraerPersonajes = async()=>{
        try {
            const res= await fetch(` https://rickandmortyapi.com/api/character/?page=${paginacion}` )
            const{results}= await res.json()
            setPersonajes(results) 
            console.log(results)
        } catch (error) { 
            console.log(error)
            
        }
        

    }

    const siguiente = ()=>{ 
        setPaginacion(paginacion+1)
        TraerPersonajes()

    }

    const atras =()=>{
        setPaginacion(paginacion-1)
        TraerPersonajes()

    }
   
  return (
    <div>
        <h1>Peticion al api de rick and morty</h1>
        <button onClick={TraerPersonajes}>TraerPersonajes</button>
        <button onClick={atras}>atras</button>
        <button onClick={siguiente}>siguiente</button>
        {
            personajes.map(({id,name,image})=> (
                <div key={id}>
                    <h4>{id}-{name}</h4>
                    <img src={image} alt={name} />
                </div>
            )
            )
        }
        

       
    </div>
      

  )
}

export default PeticionApi