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

         {recipe.flat().map((a)=> {if(a !== null) 
         return  <div>
         <h2>{a.title} </h2>
         <h4>Código de receta: {a.id}</h4>
         <img src={a.image} /> 
         <p>healthyness: {a.healthyness}</p>
         <p>Diets: {a.diets.map((b) => {
             return b.name
         }).join(', ')}</p> 
         <p>score: {a.score}</p>
         <p>steps: {a.steps}</p>
         <p>summary: {a.summary}</p>
     </div> 
})}
         
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