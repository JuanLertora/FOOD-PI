import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getRecipes } from "../../actions";
import NavBar from "../NavBar/NavBar";
import RecipesCards from "../RecipesGrid/RecipesCards";


function RecipesHome({ recipe, getRecipes }) {

    useEffect(() => {
        getRecipes()
    }, [])


    return (
        <div >
            <NavBar />
            <div>
                <RecipesCards
                    recipe={recipe} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        recipe: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesHome)