import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import RecipesHome from "./componentes/RecipesHome/RecipesHome";
import Inicio from "./componentes/PaginaInicial/Inicio";
import RecipesDetail from "../src/componentes/RecipesDetail/RecipesDetail";
import PostearReceta from "./componentes/PostearReceta/PostearReceta";
import RecipesName from "./componentes/RecipesName/RecipesName";


function App() {
  return (

    <Router>

      <Route exact path="/" component={Inicio} />
      <Route exact path="/home" component={RecipesHome} />
      <Route path="/recipename" component={RecipesName} />
      <Route exact path="/recipe/:id"
        render={(match) => (
          <React.Fragment>
            <RecipesDetail match={match} />
          </React.Fragment>
        )}
      ></Route>

      <Route exact path="/recipe" component={PostearReceta} />
    </Router>

  );
}

export default App;
