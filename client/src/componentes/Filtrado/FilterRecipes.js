import React, { useEffect } from 'react';
import { orderRecipes, getRecipes,filterRecipes,getByDiet } from '../../actions/index';
import { connect } from 'react-redux'
import '../NavBar/Navbar.css'


function RecipesOrderFilters({orderrecipes,OrderRecipesAZ,diets,getAllrecipes,filterRecipesDiet,getByDiet }) {

    useEffect(() => {
        getByDiet()
    }, [])

    function handleTitle(event) {

        if (event.target.value === 'Title') {
            return getAllrecipes();
        }
        OrderRecipesAZ(orderrecipes, { title: event.target.value })

    }

    function handleScore(event) {
        if (event.target.value === 'score') {
            return getAllrecipes();
        }
        OrderRecipesAZ(orderrecipes, { score: event.target.value })

    }


    function handleFilterDiet(event) {
        if (event.target.value === 'dieta') {
            return getAllrecipes();
        }
        filterRecipesDiet(orderrecipes, { diets: event.target.value })

    }

    console.log(orderrecipes,diets)

    return (
        <div className='inputsfiltrado'>
            <div  className='inputsfiltradores'>

                <select className='selectores' onChange={handleTitle}>
                    <option label='Ordenar por Nombre' value='Title'></option>
                    <option value='Ascendent'>Ascendente</option>
                    <option value='Descendent'>Descendente</option>
                </select>

            </div>
            <div className='inputsfiltradores'>

                <select className='selectores' onChange={handleScore}>
                    <option label='Ordenar por Puntuacion' value='score'></option>
                    <option value='Ascendent' >Ascendente</option>
                    <option value='Descendent' >Descendente</option>
                </select>

            </div>
            <div className='inputsfiltradores'>
                <select  className='selectores' onChange={handleFilterDiet}>
                    <option key="-1" label='Filtrar por Dieta' value='dieta'></option>
                    {diets.length ? diets.map((diets, i) => (
                        <option key={i} value={diets.name} label={diets.name}></option>
                    )) : null}
                </select>
            </div>
        </div>
    )

}


const mapStateToProps = ((state) => {

    return {
        orderrecipes: state.orderrecipes,
        diets: state.diets
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        OrderRecipesAZ: (orderTarget, receta) => dispatch(orderRecipes(orderTarget, receta)),
        getAllrecipes: () => dispatch(getRecipes()),
        filterRecipesDiet: (orderTarget, recipe) => dispatch(filterRecipes(orderTarget, recipe)),
        getByDiet:()=>dispatch(getByDiet())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesOrderFilters)