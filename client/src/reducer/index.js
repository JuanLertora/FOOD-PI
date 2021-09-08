import {GET_RECIPES, GET_RECIPE_DETAIL,GET_RECIPE_BY_NAME} from '../actions/index';

const initialState = {
    recipes: [],
    singlerecipe: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
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
        default:
            return {
                ...state
            };
    };
};


export default reducer;