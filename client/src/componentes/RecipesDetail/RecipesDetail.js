import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getRecipeDetail } from '../../actions';




function RecipeDetail({ match, recipe, getRecipeID }) {

    useEffect(() => {
        getRecipeID(match.match.params.id)
    }, [])

    return (
        <div >
            <Link to={'/home'}>Home </Link>
        {recipe.map((recipe)=>{return(
         <div key= {recipe.id}>
         <h2>{recipe.title} </h2>
         <h4>Código de receta: {recipe.id}</h4>
         <img src={recipe.image} alt={"Imagen no encontrada"} /> 
         <p>healthyness: {recipe.healthyness}</p>
         <p>Diets: {recipe.diets.map((b) => {
             return b.name
            }).join(', ')}</p>  
         <p>score: {recipe.score}</p>
         <p>steps: {recipe.steps}</p>
         <p>summary: {recipe.summary}</p>
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