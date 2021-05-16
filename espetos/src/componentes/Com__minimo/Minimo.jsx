import React from 'react'
import Info from '../Com__minimo/Info'

export default ()=> {

    function dados(){
        return Info.map(resposta=>{
            return <li key={resposta.id} >
                nome: {resposta.nome} idade: {resposta.idade} status: {resposta.status}
            </li>
        })
    }
    return(
        <ul>
            {dados()}
        </ul>
    )
}