import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../RecipesCard/RecipeCard';
import './grid.css'

function RecipesCards({ recipe }) {
  const [recipestate, setRecipeState] = useState([])

  const recipesPerPage = 9
  const pages = Math.ceil(recipe.length / recipesPerPage)
  
  const [currentPage, setCurrentPage] = useState(1)

  const showPages = (pageNum) => {
      const index = pageNum * recipesPerPage + 1;
      setRecipeState(recipe.slice(index - recipesPerPage - 1, index - 1));
      setCurrentPage(pageNum)
  }


  useEffect(() => {

      showPages(1)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe])

  return (
          <div >
          
          <div >
              {recipestate && recipestate.map((recipe) => (
                <div  className="Recetario" key={recipe.id}>
          <RecipeCard
          image={recipe.image}
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          diets={recipe.diets.map(a=>{
            return a.name
          }).join(', ')}
          score={recipe.score}
          />
          </div>
          

          ))}
    </div>
              <div className='pages'>
                  <button onClick={() => showPages(currentPage > 1 ?
                      currentPage - 1 : currentPage)} className='paginado'>{'Prev'}</button>
    
                  <button  onClick={() => showPages(currentPage < pages ?
                      currentPage + 1 : currentPage)} className='paginado2'>{`Next`}</button>
              </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    recipe: state.recipes,
  };
};

export default connect(mapStateToProps, null)(RecipesCards);