import React,{useEffect, useState} from 'react'
import ApiEsterna from './ApiEsterna'
import './Loja1.css'
import axios from 'axios'
import Busca from '../componentes/Busca/Busca'
import {Link} from 'react-router-dom'


const Loja1 = () =>{

  const [apiLoja1,setapiLoja1]= useState([])

    useEffect(()=>{
      axios.get('http://localhost:3004/promotions?_embed=comments')
      .then((Response)=>{
        setapiLoja1(Response.data)
      })

    }, [])


    return(
        <div className='loja_conteiner' >
          <header className='Loja_header'>
            <h1>Lojas do Fulano</h1>
            <Link to='/' className='Loja_link' >Voltar para o inicio</Link>
          </header>
          
          <Busca/>
          
          {apiLoja1.map((apiLoja1) => (
            <ApiEsterna promotions ={apiLoja1} />
          ))}

        </div>
    )
}
export default Loja1;