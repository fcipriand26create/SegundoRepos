import React from 'react'

/* Hola esto es un comentario 
de otro usuario */

function Home() {
    const ListItem = [1,2,3,4]

    const addItem=()=>{
        const variableA=1;
        const variableB=3;
        const variableC=2;

        return variableA*3 +variableB*variableC
    }
    return(
        <><di>Home</di>
        <p>Hola mundo</p>
        <button onclick={addItem}></button></>
    )
} 

export default Home 