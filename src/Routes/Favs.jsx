import React, {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(ContextGlobal);

  const favsFromLocalStorage = JSON.parse(localStorage.getItem("cardsAddedToFavorites"));

  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { favsFromLocalStorage && 
          favsFromLocalStorage.map((doctor) =>(
          <Card key={doctor.id}  name={doctor.name} username={doctor.username} id={doctor.id}/>
          )) ||
          ( <span>NO SE ENCUENTRAN DOCTORES MARCADOS COMO FAVORITOS</span>)
        }
      </div>
    </main>
  );
};

export default Favs;
