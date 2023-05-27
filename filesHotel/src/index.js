import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'
import reportWebVitals from './reportWebVitals';
import Habitaciones from './Habitaciones';
import Detalle from './detalleHabitacion'
import { createBrowserRouter,
         RouterProvider,
         Route
       } from 'react-router-dom';


//ReactDOM.render(<div><p>nodo de prueba</p></div>, document.getElementById("prueba"))

const header = ReactDOM.createRoot(document.getElementById('header'))
header.render(
    <Header />    
);
function Tiempo(props){
  const estilos={
    textAlign:'center',
    color:'blue'
  }
return (<div style={estilos}>Son las {new Date().toLocaleTimeString()} en {props.pais}</div> )
}
const elementRender = ReactDOM.createRoot(document.getElementById('tiempo'))

elementRender.render(
  <Tiempo pais='Colombia'/>
)


const router = createBrowserRouter([
  {
    index: true,
    element: <Habitaciones />,
  },
  {
    path: ":id",
    element: <Detalle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
