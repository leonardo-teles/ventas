import React from 'react'
import Layout from '../components/Layout';

import TableCliente from '../components/clientes/TableCliente';
import ToolbarCliente from '../components/clientes/ToolbarCliente';

const Clientes = () => {
    return ( 
        <Layout>
            <div className="panel">
                <div className="panel-heading">
                    Clientes
                </div>
                <div className="box">
                    <ToolbarCliente />
                    <TableCliente />
                </div>
            </div>
        </Layout>
    );
}
 
export default Clientes;