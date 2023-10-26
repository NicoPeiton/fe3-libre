import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  const handleThemeToggle = () =>{
    dispatch({type: "TOGGLE_THEME"})
  }

  return (
    <nav className={state.theme}>

      <li><Link to="/home">Home</Link></li>
      <li><Link to="/favs">Favs</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <button className={state.theme} onClick={handleThemeToggle}>Change theme</button>
    </nav>
  );
};

export default Navbar;