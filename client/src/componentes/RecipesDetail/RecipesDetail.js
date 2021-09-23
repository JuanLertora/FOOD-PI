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
            //eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])
    console.log(match.match.params.id)

    return (
        <div className='card' >
            <div className='homes'>
            <Link to={'/home'} className='link'>Home </Link>
            </div>
        {recipe.map((recipe)=>{return(
         <div key= {recipe.id}>
         <h2>{recipe.title} </h2>
         <img src={recipe.image || 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61666260-wikimedia-image.jpg?w=1000&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8d16051f6e43a5da5857a7100ef7a430'} alt={"Imagen no encontrada"} className='img'/> 
         <p>Saludable: {recipe.healthyness}</p>
         <p>Tipo de Dieta: {recipe.diets.map((b) => {
             return b.name
            }).join(', ')}</p>  
         <p><Star/> {recipe.score}</p>
         <p>Paso a Paso: {recipe.steps}</p>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipeID: (id) => dispatch(getRecipeDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)