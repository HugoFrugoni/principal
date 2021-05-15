import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const caminho = 'http://localhost:3001/dias'

export default class Api extends Component {
    
    state = { dias: [] }

    componentDidMount() {
        axios(caminho).then(resp=>{
            this.setState({dias:resp.data})
        })
    }

    renderOption(){
        return this.state.dias.map(dias =>{
            return  <option value={dias.id}  key={dias.id} > {dias.nome} </option>
        })
    }

    render(){
        return(
         <div>
             <header>
                <h1>Api em Json</h1>
                <Link to='/Loja1' >Ir para Loja 1</Link>
             </header>
             <label htmlFor="dias">Dias: </label>
             <select id="dias" >{this.renderOption()}</select>
         </div>
        )
    }
}