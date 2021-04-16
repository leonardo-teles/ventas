import React from 'react'
import Layout from '../components/Layout';

import TableCliente from '../components/clientes/TableCliente';
import ToolbarCliente from '../components/clientes/ToolbarCliente';
import Modal from '../components/Modal';
import FormCliente from '../components/clientes/FormCliente';

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
            <Modal>
                <FormCliente />
            </Modal>
        </Layout>
    );
}
 
export default Clientes;