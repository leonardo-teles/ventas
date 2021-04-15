import React, { useState } from 'react';

const TableCliente = () => {

    const[clientesList, setClientesList] = useState([
        {
            "idCliente" : 1,
            "nombre" : "Leonardo",
            "apellido" : "Teles de Almeida",
            "direccion" : "Estrada da Cachamorra",
            "telefono" : "979615072",
            "email" : "leonardo.teles.almeida@gmail.com"
        },
        {
            "idCliente" : 2,
            "nombre" : "Manuela",
            "apellido" : "Souza de Almeida",
            "direccion" : "Estrada da Cachamorra",
            "telefono" : "991054374",
            "email" : "manuela.souza.almeida@gmail.com"
        },
        {
            "idCliente" : 3,
            "nombre" : "Juliana",
            "apellido" : "Ferreira de Almeida",
            "direccion" : "Rua Murilo Alvarenga",
            "telefono" : "12345678",
            "email" : "juliana.ferreira.almeida@gmail.com"
        }
    ]);

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
                            <tr key={cliente.idCliente}>
                                <td>
                                    <button className="button is-small is-info mr-1" title="Modificar">
                                        <span className="icon is-small">
                                            <i className="fas fa-edit"></i>
                                        </span>
                                    </button>
                                    <button className="button is-small is-danger" title="Eliminar">
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
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default TableCliente;