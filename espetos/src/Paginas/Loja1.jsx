import React,{useEffect, useState} from 'react';
import ApiEsterna from './ApiEsterna';
import './Loja1.css';
import axios from 'axios'
import {Link} from 'react-router-dom';


const Loja1 = () =>{

  const [Busca,setBusca] = useState('')
  
  const [apiLoja1,setapiLoja1]= useState([])

    useEffect(()=>{
      const params ={}
      if(Busca){
        params.title_like = Busca;
      }

      axios.get('http://localhost:3004/promotions?_embed=comments&_order=desc&_sort=id',{params})
      .then((Response)=>{
        setapiLoja1(Response.data)
      })

    },[Busca] );

    console.log(apiLoja1)

    return(
        <div className='loja_conteiner' >
          <header className='loja_header'>
            <h1>Lojas do Fulano</h1>
            <Link to='/' className='loja_link' >Voltar para o inicio</Link>
          </header>
          <Link className='link2' to='/cadastro' > Cadastro para promoção</Link>
          <input className='loja_busca' 
            type='search'
            value={Busca}
            onChange={(ev)=>setBusca(ev.target.value)}
          />
          {apiLoja1.map((apiLoja1) => (
            <ApiEsterna promotions ={apiLoja1}/>
          ))}
        
        </div>
    )
}
export default Loja1;