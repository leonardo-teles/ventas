import React, { useContext } from 'react';

import { ModalContext } from '../../context/modalContext';

const ToolbarCliente = () => {

    const {setShowModal, setModalTitle} =  useContext(ModalContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar Nuevo Cliente');
        setShowModal(true);
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
