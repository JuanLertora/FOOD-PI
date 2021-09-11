import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CreateRecipe, getRecipes,getByDiet } from "../../actions/index"
import { validate } from "../../utils"


function RecipeCreate({ recipes,diets, postcreaterecipe, getallrecipes,getByDiet }) {


    const [input, setInput] = useState({
        title: "",
        summary: "",
        steps: "",
        healthyness: "",
        score: "",
        diets: [],
    });
    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        steps: "",
        healthyness: "",
        score: "",
        diets: "",
    })

    useEffect(() => {
        getallrecipes()
        getByDiet()
    }, [])





    function handleInputChange(event) {
        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }


    function handleDietsSelection(event) {
        if (event.target.value === "") {
            setErrors({
                ...errors,
                diets: "You must choose one or more diets"
            });
            return;
        }

        setErrors({
            ...errors,
            diets: ""
        });
        const dietsExists = input.diets.find(
            (item) => item === event.target.value
        );

        if (!dietsExists) {

            setInput({
                ...input,
                diets: [...input.diets, event.target.value],
            });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        postcreaterecipe(input)
        getallrecipes()
    }

    function onClickSubmit() {
        if (!input.title || !input.summary || !input.diets || !input.servings || !input.steps || !input.healthyness || !input.score) {
            alert('You must complete all the fields')
        } else {
            alert('The recipe was successfully created')
        }
    }


    return (
        <div>
            {console.log(recipes)}
            <Link to="/home">home</Link>
            <input type="text" name='title'
                value={input.title} onChange={handleInputChange} placeholder='Title' />
            {errors.title && (<p>{errors.title}</p>)}
            <form onSubmit={handleSubmit}>

                <div>
                    <input type="text" name="summary" value={input.summary} onChange={handleInputChange} placeholder='Summary' />
                    {errors.summary && (<p>{errors.summary}</p>)}
                </div>

                <div>

                    <input type="number" name="healthyness" value={input.healthyness} onChange={handleInputChange} placeholder='healthyness' />
                    {errors.healthyness && (<p>{errors.healthyness}</p>)}
                </div>

                <div>

                    <input type="number" name="score" value={input.score} onChange={handleInputChange} placeholder='score' />
                    {errors.score && (<p>{errors.score}</p>)}
                </div>

                <div>
                    <input type="text" name="steps" value={input.steps} onChange={handleInputChange} placeholder='steps' />
                    {errors.steps && (<p>{errors.steps}</p>)}
                </div>

                <select onChange={handleDietsSelection}>
                    <option value=''>Select a diets</option>
                    {
                        diets?.map((item,i) => {
                            return <option value={item.name} key={i}>{item.name}</option>;
                        })
                    }
                </select>
                <input type="text" name="diets" value={input.diets} onChange={onClickSubmit} placeholder='Diets' />
                {errors.diets && (
                    <p>{errors.diets}</p>
                )}
                <input type="submit" value='Create a new recipe' />
            </form>
        </div>
    
    )
    
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        diets: state.diets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postcreaterecipe: (recipe) => dispatch(CreateRecipe(recipe)),
        getallrecipes: () => dispatch(getRecipes()),
        getByDiet:()=>dispatch(getByDiet())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreate)





///function postear receta ----- TITLE SCORE 

/// function postear receta ===== {title score}


//// postearreceta: {titlescore} dispatch action CreateRecipe

