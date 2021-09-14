import { Link } from "react-router-dom";
import React from 'react';
import '../RecipesGrid/grid.css'
import {Star} from "../../utils/iconos";


export function RecipeCard({ title,diets,id,image,score }) {
  return (
    <div className='cartas'>
        <div>
        <img className='imagenrota' src={image || 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61666260-wikimedia-image.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8d16051f6e43a5da5857a7100ef7a430'} alt='Falta Imagen'/>
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