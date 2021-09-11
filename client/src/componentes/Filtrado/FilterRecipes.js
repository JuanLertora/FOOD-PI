import React from 'react';
import { orderRecipes, getRecipes } from '../../actions/index';
import { connect } from 'react-redux'


function RecipesOrderFilters({orderrecipes,OrderRecipesAZ,recipes,getAllrecipes }) {

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


    // function handleFilterActivities(event) {
    //     if (event.target.value === 'activityFilter') {
    //         return getAllrecipes();
    //     }
    //     filterCountries2(orderrecipes, { activities: event.target.value })

    // }

    

    return (
        <div >
            <div>

                <select  onChange={handleTitle}>
                    <option label='Ordenar por Nombre' value='Title'></option>
                    <option value='Ascendent'>Ascendente</option>
                    <option value='Descendent'>Descendente</option>
                </select>

            </div>
            <div>

                <select  onChange={handleScore}>
                    <option label='Ordenar por Puntuacion' value='Score'></option>
                    <option value='Ascendent' >Ascendente</option>
                    <option value='Descendent' >Descendente</option>
                </select>

            </div>
            {/* <div>
                <select className={styles.select} onChange={handleFilterActivities}>
                    <option key="-1" label='Filtrar por Actividad Turística' value='activityFilter'></option>
                    {activities.length ? activities.map((activity, i) => (
                        <option key={i} value={activity.name} label={activity.name}></option>
                    )) : null}
                </select>
            </div> */}
        </div>
    )

}


const mapStateToProps = ((state) => {

    return {
        orderrecipes: state.orderrecipes,
        recipes: state.recipes
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        OrderRecipesAZ: (orderTarget, receta) => dispatch(orderRecipes(orderTarget, receta)),
        getAllrecipes: () => dispatch(getRecipes()),
        // filterCountries2: (countries, criteria) => dispatch(filterCountries(countries, criteria))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesOrderFilters)