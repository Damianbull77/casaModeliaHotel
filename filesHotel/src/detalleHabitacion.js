import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'



function Habitacion(props){

    return(
        
            <div style={{'padding-top':'10px'}} className='col-4 text-center pt-50'> 
                <div className=" text-center">
                    <img className="border rounded-5 mw-100" src={props.urlImg} alt='imagen de habitación'/>
                    <h3  style={{width:'100%'}}>{props.descripcion}</h3>
                    <p style={{width:'100%'}}>{props.valor}</p>               
                   <button className="bg-color border rounded-5 w-100"><h1>Reservar</h1></button>
                </div>
            </div>

        
    )

}

export default Habitacion;