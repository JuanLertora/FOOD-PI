import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import RecipesHome from "./componentes/RecipesHome/RecipesHome";
import Inicio from "./componentes/PaginaInicial/Inicio";
import RecipesDetail from "../src/componentes/RecipesDetail/RecipesDetail";


function App() {
  return (
   
      <Router>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/home" component={RecipesHome} />
      <Route exact path="/recipe/:id"
            render={(match) => (
              <React.Fragment>
               <RecipesDetail match={match}/>
              </React.Fragment>
            )}
          ></Route>
      </Router>  
      
      );
}

export default App;
