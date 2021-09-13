import { Link } from "react-router-dom";
import React from 'react';
import '../RecipesGrid/grid.css'
import {Star} from "../../utils/iconos";


export function RecipeCard({ title,diets,id,image,score }) {
  return (
    <div className='cartas'>
        <div>
        <img className='imagenrota' src={image} alt='Falta Imagen'/>
        <h2>{title}</h2>
        <h5>Tipo de dieta:<br/>{diets}</h5>
        <h4><Star/>{score}</h4>
        </div>
        <Link to={`/recipe/` + id} ><button className='botondetalles'>Detalles</button>
      </Link>
    </div>
  );
}

export default RecipeCard