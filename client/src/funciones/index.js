  
 export async function RecipeOrder(orderTarget, receta) {

    let recetaordenada
    if (receta.title === 'Ascendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.title > b.title ? 1 : a.title < b.title ? -1 : 0),
        )

    if (receta.title === 'Descendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.title < b.title ? 1 : a.title > b.title ? -1 : 0),
        )

    if (receta.score === 'Ascendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.score > b.score ? 1 : a.score < b.score ? -1 : 0),
        )

    if (receta.score === 'Descendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.score < b.score ? 1 : a.score > b.score ? -1 : 0),
        )

    return recetaordenada;

}

export async function filterRecipeDiet(orderTarget, receta) {
    let recetafiltrada;
  
      if (receta.diets){
        recetafiltrada = orderTarget.filter((recipe) =>
        recipe.diets.filter((diet) => diet.name === receta.diets).length)
        }
    
    return recetafiltrada;
    
    } 