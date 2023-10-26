import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const cardData = {
      id,
      name,
      username,
    };

    const isAlreadyFavorited = state.data.some((card) => card.id === id);

    if (!isAlreadyFavorited) {

      dispatch({ type: "ADD_DATA", payload: cardData });

      const updatedData = [...state.data, cardData];
      localStorage.setItem("cardsAddedToFavorites", JSON.stringify(updatedData));
      alert("¡La tarjeta se añadió a favoritos!");
      console.log("Dentista "+`${id}`+" añadido a favoritos.");
    } else {
      alert("Esta tarjeta ya se encuentra en favoritos.");
      console.log("El dentista "+`${id}`+" ya se encuentra en favoritos");
    }
  };

  const removeFav = () => {
    const cardData = {
      id,
      name,
      username,
    };

    const isAlreadyFavorited = state.data.some((card) => card.id === id);

    if (isAlreadyFavorited) {

      dispatch({ type: "REMOVE_DATA", payload: cardData });

      const updatedData = [...state.data, cardData];
      localStorage.removeItem("cardsAddedToFavorites", JSON.stringify(updatedData));
      alert("¡La tarjeta se eliminó de favoritos!");
      console.log("Dentista "+`${id}`+" eliminado de favoritos.");
    } else {
      alert("Esta tarjeta no se encuentra en favoritos.");
      console.log("El dentista "+`${id}`+" no se encuentra en favoritos");
    }
  };

  return (
    <div className="card" id={id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="dentista" />
        <Link to={`/dentist/${id}`}>{name}</Link>
        <h3>{username} - ID: {id}</h3>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
        <button onClick={removeFav} className="favButton">Remove fav</button>
    </div>
  );
};

export default Card;
