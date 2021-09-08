import React from 'react';
import {Link} from 'react-router-dom';

 function RecipesName({  title,id, image,summary,score, healthyness,steps}) {
    
   return (
        <div>
            
             <div >
                <button>X</button>
            <Link to={`/recipe/${id}`}>
                <img src={image}/>
                </Link>
                <div>
                    <h1>{title}</h1>
                    <p>summary: {summary}</p>
                    <p>score: {score}</p>
                    <p>teps: {steps}</p>
                    <p>healthyness: {healthyness}</p>
    
                </div>
                </div>

        </div>
    )
}

export default RecipesName