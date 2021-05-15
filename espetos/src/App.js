import React,{useState} from 'react'
import './App.css'
import Carne from './Fotos/espetinho.png'
import Api from './componentes/Api'


function App() {
  
  return (
    <div className="app_conteiner" >
      <img src={Carne} />
      <di>
        <Api></Api>
      </di>
    </div>
  );
}
 export default App;

  