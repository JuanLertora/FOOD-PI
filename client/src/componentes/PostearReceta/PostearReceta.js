import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import { CreateRecipe, getRecipes,getByDiet } from "../../actions/index"
import { validate } from "../../utils"
import './post.css'


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
            <div className='home'>
            <Link to="/home" className='link'>home</Link>
            </div>
            <div className='formulario'>
                <div className='row'>
            <form onSubmit={handleSubmit}>
                <div className='col'>
            <label>Titulo: </label>
            <input type="text" name='title'
                value={input.title} onChange={handleInputChange} placeholder='Title' />
            {errors.title && (<p>{errors.title}</p>)}
            </div>

                <div className='col'>
                    <label>Descripcion:  </label>
                    <input type="text" name="summary" value={input.summary} onChange={handleInputChange} placeholder='Summary' />
                    {errors.summary && (<p>{errors.summary}</p>)}
                </div>

                <div className='col'> 
                <label>Saludable: </label>
                    <input type="number" name="healthyness" value={input.healthyness} onChange={handleInputChange} placeholder='healthyness' />
                    {errors.healthyness && (<p>{errors.healthyness}</p>)}
                </div>

                <div className='col'>
                <label>Puntuacion:  </label>

                    <input type="number" name="score" value={input.score} onChange={handleInputChange} placeholder='score' />
                    {errors.score && (<p>{errors.score}</p>)}
                </div>

                <div className='col'>
                <label>Paso a Paso: </label>
                    <input type="text" name="steps" value={input.steps} onChange={handleInputChange} placeholder='steps' />
                    {errors.steps && (<p>{errors.steps}</p>)}
                </div>
                <div className='col'>                   
                     <label>Tipo de dieta: </label>
                    <input type="text" name="diets" value={input.diets} onChange={onClickSubmit} placeholder='Diets' />
                    {errors.diets && (
                        <p>{errors.diets}</p>
                    )}
                <select onChange={handleDietsSelection}>
                    <option value=''>Select a diets</option>
                    {
                        diets?.map((item,i) => {
                            return <option value={item.name} key={i} >{item.name}</option>;
                        })
                    }
                </select>
                </div>

                <input type="submit" value='Create a new recipe' />
            </form>
        </div>
        </div>
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

