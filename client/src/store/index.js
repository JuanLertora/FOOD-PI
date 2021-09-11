import { createStore, applyMiddleware,compose } from 'redux';
import reducer from '../reducer/index'
import thunk from 'redux-thunk'


// const store = createStore(reducer, applyMiddleware(thunk),( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

 const store = createStore(
    reducer, compose(applyMiddleware(thunk),
   (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    );


export default store;