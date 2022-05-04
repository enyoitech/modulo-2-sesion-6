import React from 'react'
import './content.css';

export const Content = (props) => {
    const {name, sueldo, edad, civil, id} =props;

    let estado = 'Solter@';
    if (civil) {
        estado= 'Casad@';
    }
    
    return (
        <>
            <div className="card formato my-4" key={id} >
                <div className="card-body">
                    <h5 className="card-title">Nombre: {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Sueldo: {sueldo}</h6>
                    <p className="card-text">Edad: {edad}</p>
                    <p className="card-text">
                        Estado Civil: {estado}
                    </p>
                    {/* <p className="card-text">
                        Estado Civil: 
                        {civil? ' Casad@' : ' Solter@'}
                    </p> */}
                    
                </div>
            </div>

        </>
    )
}
