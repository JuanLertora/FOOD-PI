  
 export async function RecipeOrder(orderTarget, criteria) {

    let recetaordenada
    if (criteria.title === 'Ascendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.title > b.title ? 1 : a.title < b.title ? -1 : 0),
        )

    if (criteria.title === 'Descendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.title < b.title ? 1 : a.title > b.title ? -1 : 0),
        )

    if (criteria.score === 'Ascendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.score > b.score ? 1 : a.score < b.score ? -1 : 0),
        )

    if (criteria.score === 'Descendent')
        recetaordenada = orderTarget.sort((a, b) => (
            a.score < b.score ? 1 : a.score > b.score ? -1 : 0),
        )

    return recetaordenada;

}