import { Link } from "react-router-dom";
import React from 'react';

export function RecipeCard({ title,diets,id,image,score }) {
  return (
    <div >
        <div>
        <h2>{title}</h2>
        <h5>Tipo de dieta:{diets}</h5>
        <h6>Puntuacion:{score}</h6>
        <img src={image} alt={"Imagen no encontrada"}/>
        </div>
        <Link to={`/recipe/` + id}> Detalles
      </Link>
    </div>
  );
}

export default RecipeCard