import React from 'react'

const Variables = () => {
    const saludo= "hola mundo"
    const imagen= "https://picsum.photos/id/237/400"
    const texto_alt="esto es una imagen"
    return (
    <div>
        <h1>{saludo}</h1>
        <img src={imagen} alt={texto_alt} />
    </div>
  )
}

export default Variables