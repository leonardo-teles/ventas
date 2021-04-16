import React, { useContext } from 'react';

import { ModalContext } from '../../context/modal/modalContext';

const RowCliente = ({cliente}) => {

    const {setShowModal, setModalTitle} =  useContext(ModalContext);

    const abrirModalModificarCliente = () => {
        setModalTitle('Modificar Cliente');
        setShowModal(true);
    }

    const eliminarCliente = () => {
        console.log('eliminando...');
    }

    return ( 
        <tr>
            <td>
                <button 
                    className="button is-small is-info mr-1" 
                    title="Modificar"
                    onClick={() => abrirModalModificarCliente()}
                >
                    <span className="icon is-small">
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button 
                    className="button is-small is-danger" 
                    title="Eliminar"
                    onClick={() => eliminarCliente()}
                >
                    <span className="icon is-small">
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.direccion}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.email}</td>
        </tr>
    );
}
 
export default RowCliente;