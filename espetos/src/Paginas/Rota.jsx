import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Principal from '../Paginas/Principal'

const Rota = () => {
    return(
        <Router>
            <Switch >
                <Route path="/" component={Principal} />
            </Switch>
        </Router>
    )
}
export default Rota;