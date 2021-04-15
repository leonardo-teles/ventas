import React from 'react';

const ToolbarCliente = () => {

    const abrirModalCrear = () => {
        console.log('modal crear...');
    }

    return ( 
        <div className="container mb-5">
            <button 
                className="button is-small is-primary"
                onClick={() => abrirModalCrear()}
            >
                <span className="icon is-small">
                    <i className="fas fa-plus"></i>
                </span>
                <span>Registrar Nuevo</span>
            </button>
        </div>
    );
}
 
export default ToolbarCliente;
