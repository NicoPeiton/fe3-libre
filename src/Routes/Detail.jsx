import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const [dataDoctor, setDataDoctor] = useState([]);
  const { state } = useContext(ContextGlobal);
  useEffect(() => {

    const fetchDataDoctor = async () => {

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();

        setDataDoctor(data);
      } catch (error) {
        console.error('Error al obtener los datos de la API --->', error);
      }
    }

    fetchDataDoctor();
  }, []);

  return (
    <>
      <h1>Detail Dentist id {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table border="1" className={state.theme}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dataDoctor.name || 'N/A'}</td>
            <td>{dataDoctor.email || 'N/A'}</td>
            <td>{dataDoctor.phone || 'N/A'}</td>
            <td>{dataDoctor.website || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

    </>
  )
}

export default Detail