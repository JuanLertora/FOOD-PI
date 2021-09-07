import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import RecipesHome from "./componentes/RecipesHome/RecipesHome";
import Inicio from "./componentes/PaginaInicial/Inicio";


function App() {
  return (
   
      <Router>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/home" component={RecipesHome} />
      </Router>  
      
      );
}

export default App;
