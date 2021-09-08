import React from 'react';
import { Link} from 'react-router-dom';
import Searchbar from '../Searchbar';
import './Navbar.css';

function NavBar() {
    return (
      <nav >
        <div >
          <Link to="/home">Home</Link>
        </div>
        <div >
          <Searchbar/>
          </div>
        
  
      </nav>
    );
  };
  
  export default NavBar;