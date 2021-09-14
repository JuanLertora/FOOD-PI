import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';
import { getRecipebyName } from '../../actions/index';
import FilterRecipes from '../Filtrado/FilterRecipes';



function NavBar({getRecipebyName}) {

  const [ActualState, setActualState] = useState('')



  function handleChange(event) {
  
    setActualState(event.target.value)
}


function handleClik() {
  
  if(ActualState){
  getRecipebyName(ActualState)
  }
  
}



    return (
      <nav className='navbar'>
        <div className='navbar2'>
        <div className='navlink'>
          <NavLink to="/home" className='navlink1' >Home</NavLink>
          <NavLink to="/recipe" className='navlink1'>Create a New Recipe</NavLink>
          </div>
          <div className='inputs'>
            <FilterRecipes/>
          </div>
          <div className='busqueda'>
          <input value={ActualState} type='text' placeholder='buscador' className='inputsearch' onChange={handleChange}/>
          <NavLink to='/recipename' ><button className='botonsearch' onClick={handleClik}>Search</button></NavLink>
          </div>


        </div>
  
      </nav>
    );
  };

  const mapStateToProps = (state) => {
    return {
        recipe: state.singlerecipe,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRecipebyName: name => {
            dispatch(getRecipebyName(name))
        },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)