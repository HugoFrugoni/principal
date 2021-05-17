import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Loja1 from './Loja1'
  import App from '../App'
  import Form from '../componentes/Form/Form'

const Rota = () => {
    return(
        <Router>
            <Switch >
                <Route path="/loja1"  component={Loja1} />
                <Route path="/cadastro" component={Form} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    )
}
export default Rota;