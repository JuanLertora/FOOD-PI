import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../RecipesDetail/recipedetail.css'
import {Star} from "../../utils/iconos";



 function RecipesName({recipe}) {

        return (
            <div >
                <div className='homes'>
                <Link to={'/home'} className='link'>Home </Link>
                </div>
            {recipe.map((recipe)=>{return(
             <div key= {recipe.id} className='card'>
             <h2>{recipe.title} </h2>
             <img src={recipe.image || 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61666260-wikimedia-image.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8d16051f6e43a5da5857a7100ef7a430'} alt={"Imagen no encontrada"} className='img'/> 
             <p>Saludable: {recipe.healthyness}</p>
             <p>Tipo de dieta: {recipe.diets.map((b) => {
                 return b.name
                }).join(', ')}</p>  
             <p><Star/> {recipe.score}</p>
             <p>Paso a paso: {recipe.steps}</p>
             <p>Descripcion: {recipe.summary.replace(/<[^>]*>?/g, "")}</p>
                <h4>Código de receta: {recipe.id}</h4>
         </div> 
          )})}
            </div>
        )
    
    
    }
    
    const mapStateToProps = (state) => {
    
        return {
            recipe: state.singlerecipe,
        }
    }
    
    
    export default connect(mapStateToProps,null)(RecipesName)