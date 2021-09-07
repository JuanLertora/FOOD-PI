import axios from 'axios'
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_NAME = 'GET_RECIPE_BY_NAME';
export const GET_RECIPE_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_BY_DIET = 'GET_BY_DIET';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const ORDER_RECIPES = 'ORDER_RECIPES';
export const FILTER_RECIPES = 'FILTER_COUNTRIES';

export function getRecipes() {
    return async function (dispatch) {
        return axios.get(`http://localhost:3001/recipe`)
            .then((response) => {
                dispatch({
                    type: GET_RECIPES,
                    payload: response.data
                })
            })
    }
}

// export function getRecipebyName(name) {
//     return async function (dispatch) {
//       try{  return axios.get(`http://localhost:3001/recipe?name=${name}`)
//             .then(response => {
//                dispatch({
//                     type: GET_RECIPE_BY_NAME,
//                     payload: response.data,
//                 })
//             })
//         } catch (err) { console.log(err) }
//     }
// }


// export function getRecipeDetail(id) {
//     return async function (dispatch) {
//         return axios.get(`http://localhost:3001/recipe/${id}`)
//             .then((response) => {
//                 dispatch({
//                     type: GET_RECIPE_DETAIL,
//                     payload: response.data
//                 })
//             })
//     }
// }


// export function getByDiet() {
//     return async function (dispatch) {
//         return axios.get(`http://localhost:3001/types`)
//             .then((response) => {
//                 dispatch({
//                     type: GET_RECIPE_DETAIL,
//                     payload: response.data
//                 })
//             })
//     }
// }



// export function CreateRecipe(body) {
//     return async function (dispatch) {
//         return axios.post(`http://localhost:3001/recipe`, body)
//             .then((response) => {
//                 dispatch({
//                     type: CREATE_RECIPE,
//                     payload: response.data
//                 })
//             })
//     }
// }


// export function orderRecipes(orderTarget, criteria) {
//     return async function (dispatch) {
//          countriesOrder(orderTarget, criteria)
//         .then((orderTarget) => {
               
//             return dispatch({
//                     type: ORDER_RECIPES,
//                     payload: orderTarget,
//                 })
//             })
//     }
// }
// export function filterRecipes(orderTarget, criteria) {
//     return async function (dispatch) {
//         filterContinentActivity(orderTarget, criteria)
//         .then((orderTarget) => {
               
//             return dispatch({
//                     type: FILTER_RECIPES,
//                     payload: orderTarget,
//                 })
//             })
//     }
// }