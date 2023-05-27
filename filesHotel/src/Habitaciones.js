import React, { useState, useEffect } from 'react';
import Habitacion from './Habitacion';
import 'bootstrap/dist/css/bootstrap.min.css';


function Habitaciones() {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/inicio')
      .then(response => response.json())
      .then(data => setHabitaciones(data))
      .catch(error => console.log(error));
  }, []);

  return (

      <div className='row pt-30' style={{'width':'100%'}}>
        {habitaciones.map(habitacion => (
          <div className='col-4'>
            <Habitacion urlImg={habitacion.urlImg} descripcion={habitacion.descripcion} valor={habitacion.valor}/>
            <button className="bg-color border rounded-5 w-100 text-center"><h1>Conocer</h1></button>
          </div>  
        ))}
      </div>
  );
}


export default Habitaciones;
