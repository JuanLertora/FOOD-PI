import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getRecipeDetail } from '../../actions';
import './recipedetail.css'
import {Star} from "../../utils/iconos";



function RecipeDetail({ match, recipe, getRecipeID }) {

    useEffect(() => {
        getRecipeID(match.match.params.id)
    }, [])

    return (
        <div className='card' >
            <div className='homes'>
            <Link to={'/home'} className='link'>Home </Link>
            </div>
        {recipe.map((recipe)=>{return(
         <div key= {recipe.id}>
         <h2>{recipe.title} </h2>
         <img src={recipe.image} alt={"Imagen no encontrada"} className='img'/> 
         <p>Saludable: {recipe.healthyness}</p>
         <p>Tipo de Dieta: {recipe.diets.map((b) => {
             return b.name
            }).join(', ')}</p>  
         <p><Star/> {recipe.score}</p>
         <p>Paso a Paso: {recipe.steps}</p>
         <p>Descripcion: {recipe.summary}</p>
            <h4>Código de receta: {recipe.id}</h4>
     </div> 
      )})}

         {console.log(recipe)}
        </div>
    )


}

const mapStateToProps = (state) => {

    return {
        recipe: state.singlerecipe,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipeID: (id) => dispatch(getRecipeDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)