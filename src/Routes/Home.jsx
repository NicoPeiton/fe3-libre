import React, {useEffect, useState, useContext} from 'react'
import Card from '../Components/Card.jsx'
import { ContextGlobal } from '../Components/utils/global.context.jsx';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [data, setData] = useState([]);

  const { state } = useContext(ContextGlobal);

  useEffect(() =>{
    const getDoctors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        
        setData(jsonData);

        console.log("Datos de la API obtenidos correctamente.");
      } catch (error) {
        console.error('Error al obtener los datos de la API --->', error);
      }
    };

    getDoctors();
  }, [])

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map((doctor) =>(
          <Card key={doctor.id}  name={doctor.name} username={doctor.username} id={doctor.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home