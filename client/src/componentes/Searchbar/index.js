import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import  getRecipebyName  from "../../actions/index";
import RecipesName from '../RecipesName/RecipesName';



function SearchBar({ recipe, getRecipebyName }) {
    const [ActualState, setActualState] = useState('')



    function handleButtonClick() {
        if (!ActualState) {
            return alert('Debes ingresar el nombre de una receta')
        }
    }

    function handleChange(event) {
        setActualState(event.target.value)
    }

    function handleSubmit(event) {

        getRecipebyName(ActualState)
        event.preventDefault()
        setActualState('')
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name (ex: Pasta,rice)"
                    value={ActualState}
                    onChange={handleChange}
                ></input>
                <button
                    onClick={() => handleButtonClick()}
                    type="submit">BUSCAR Receta!
                </button>
                {recipe.flat().map((a)=> 
                {if(a !== null) 
                return  <RecipesName
                    title={a.title}
                    id={a.id}
                    healthyness={a.healthyness}
                    score={a.score}
                    steps={a.steps}
                    summary={a.summary}
                />}
                )}
            </form>
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
        getRecipebyName: name => {
            dispatch(getRecipebyName(name))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)