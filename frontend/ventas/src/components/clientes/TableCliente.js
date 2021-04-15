import React from 'react'

const TableCliente = () => {
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
                    <tr>
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
                        <td>Leonardo</td>
                        <td>Teles de Almeida</td>
                        <td>Estrada da Cachamorra</td>
                        <td>979615072</td>
                        <td>leonardo.teles.almeida@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default TableCliente;