import React from 'react'

export default (props)=>{
    return(
        <div> 
            Componente filho
            <p> {props.children} - {props.sobrenome} </p>
        </div>
    )
}