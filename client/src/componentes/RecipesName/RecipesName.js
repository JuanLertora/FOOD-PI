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
             <img src={recipe.image} alt={"Imagen no encontrada"} /> 
             <p>Saludable: {recipe.healthyness}</p>
             <p>Tipo de dieta: {recipe.diets.map((b) => {
                 return b.name
                }).join(', ')}</p>  
             <p><Star/> {recipe.score}</p>
             <p>Paso a paso: {recipe.steps}</p>
             <p>Descripcion: {recipe.summary}</p>
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