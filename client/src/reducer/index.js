import {GET_RECIPES} from '../actions/index';

const initialState = {
    recipe: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipe: action.payload,
            };
        default:
            return {
                ...state
            };
    };
};


export default reducer;