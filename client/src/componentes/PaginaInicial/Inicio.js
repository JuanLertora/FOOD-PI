import React from "react";
import { Link } from "react-router-dom";
import './Inicio.modules.css'


export default function Inicio() {
    return(
        <div className='pagina'>

            {/* <img className='fondo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNB1-EwZ95YO7DxHKME8Jcug01bR3GnK82Q&usqp=CAU'/> */}
                  <Link to='/home' className='inicio'>
                    <button className='boton'><div className='inicio'>Busca tu receta favorita!</div></button>
                    </Link>           
        </div>
    )

}
