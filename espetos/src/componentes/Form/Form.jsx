import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import "../Form/Form.css"
import axios from 'axios'



const Form = () => {

   const [comeco,setcomeco]=useState([])
   const history= useHistory()

   function onchange(ev){
      const {name,value} = ev.target
      console.log({name,value})
      setcomeco({...comeco,[name]:value})
   }
   function submit(ev){
      ev.preventDefault()
      axios.post('http://localhost:3004/promotions',comeco).then((response)=> {
         history.push('/loja1')
      } )
   }

    return(
       <div>
           <Link className="form_link"  to='/loja1' >Volotar para loja</Link>
           <h1>Nova promoção</h1>
           <form onSubmit={submit} >
               <div className="form_conteiner" >
                  <label className="form_titulo"  htmlFor="title" >Titulo</  label>
                  <input className="form_input_titulo" id="title"   name="title" type="text" onChange={onchange} />
               </div>

               <div className="form_conteiner" >
                  <label className="form_titulo"  htmlFor="url" >Url</  label>
                  <input className="form_input_titulo" id="url"   name="url" type="text" onChange={onchange} />
               </div>

               <div className="form_conteiner" >
                  <label className="form_titulo"  htmlFor="imageUrl" >Caminho da imagem</  label>
                  <input className="form_input_titulo" id="imageUrl"   name="imageUrl" type="text" onChange={onchange} />
               </div>

               <div className="form_conteiner" >
                  <label className="form_titulo"  htmlFor="price" >Preço</  label>
                  <input className="form_input_titulo" id="price"   name="price" type="number" onChange={onchange} />
               </div>
               <button type="submit" >Cadastrar</button>
           </form>


       </div>
        
    )
}
export default Form;