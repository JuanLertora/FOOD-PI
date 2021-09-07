import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../RecipesCard/RecipeCard';
import './grid.css'

function RecipesCards({ recipe }) {

  return (
    <div className= 'MoviesGrid'>
      {recipe.map((recipe) => (
        recipe.map((recipe => (
          <RecipeCard
          image={recipe.image}
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          diets={recipe.diets.map((a)=>{
            return a.name
          }).join(', ')}
          />
          
          )))
          ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
  };
};

export default connect(mapStateToProps, null)(RecipesCards);