import React, { useContext } from 'react';

import { ModalContext } from '../../context/modalContext';
import { ClienteContext } from '../../context/clienteContext';

const ToolbarCliente = () => {

    const {setShowModal, setModalTitle} =  useContext(ModalContext);

    const {obtenerCliente} = useContext(ClienteContext);

    const abrirModalCrear = () => {
        setModalTitle('Registrar Nuevo Cliente');
        setShowModal(true);
        obtenerCliente(null);
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
