import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'



function Habitacion(props){

    return(
        
            <div style={{'padding-top':'10px'}}> 
                <div className=" text-center">
                    <img className="border rounded-5 mw-100" src={props.urlImg} alt='imagen de habitación'/>
                    <h3  style={{width:'100%'}}>{props.descripcion}</h3>
                    <p style={{width:'100%'}}>{props.valor}</p>               
                </div>
            </div>

        
    )

}

export default Habitacion;