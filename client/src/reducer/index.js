import { GET_RECIPES, GET_RECIPE_DETAIL, GET_RECIPE_BY_NAME, GET_BY_DIET, CREATE_RECIPE, CLEAN_RECIPE, ORDER_RECIPES } from '../actions/index';

const initialState = {
    recipes: [],
    singlerecipe: [],
    diets: [],
    orderrecipes: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                orderrecipes: action.payload
            };
            
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                singlerecipe: action.payload,
            };

        case GET_RECIPE_BY_NAME:
            return {
                ...state,
                singlerecipe: action.payload,
            };

        case GET_BY_DIET:
            return {
                ...state,
                diets: action.payload,
            }

        case CREATE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.concat(action.payload),
            }

        case CLEAN_RECIPE:
            return {
                ...state,
                singlerecipe: action.payload,
            };

        case ORDER_RECIPES:
            return {
                ...state,
                recipes: action.payload.slice(),
            };

        default:
            return {
                ...state
            };
    };
};


export default reducer;