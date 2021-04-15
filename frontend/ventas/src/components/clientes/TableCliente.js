import React, { useState } from 'react';

import RowCliente from './RowCliente';

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
                            <RowCliente cliente={cliente} key={cliente.idCliente}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default TableCliente;