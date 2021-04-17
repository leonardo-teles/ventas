import React, { useContext, useEffect } from 'react';

import RowCliente from './RowCliente';
import { ClienteContext } from '../../context/clienteContext';

const TableCliente = () => {

    const { clientesList, obtenerClientes } = useContext(ClienteContext);

    useEffect(() => {
        obtenerClientes();
    }, []);

    if(clientesList.length === 0) 
        return <center><p>No existen clientes</p></center>

    return ( 
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Telefono</th>
                        <th>e-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesList.map(cliente => (
                            <RowCliente cliente={cliente} key={cliente.idCliente}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default TableCliente;