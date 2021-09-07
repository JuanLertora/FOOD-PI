import { Link } from "react-router-dom";
import React from 'react';

export function RecipeCard({ title,diets,id,image }) {
  return (
    <div >
        <div>
        <h5>Titulo:{title}</h5>
        <h6>Tipo de dieta:{diets}</h6>
        <img src={image} alt='comida'/>
        </div>
        <Link to={`/recipe/` + id}> Detalles
      </Link>
    </div>
  );
}

export default RecipeCard