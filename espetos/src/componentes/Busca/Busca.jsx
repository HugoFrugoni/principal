import React from 'react'
import '../Busca/Busca.css'

const Busca = (props) => {
   
    return(
        <div className='titulo'>
            <span>Busca: </span>
            <input 
            type='search'
           
            onChange = {(ev)=>{
                props.quandoPesquisar(ev.target.value)
            }}
            />
        </div>
    )
}
export default Busca;