import React, { createContext, useReducer } from 'react';

import { OBTENER_CLIENTES } from '../const/actionTypes';
import ClienteReducer from '../reducer/clienteReducer';

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
    
    const initialState = {
        clientesList: []
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);

    const obtenerClientes = () => {

        const clientes = [
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
        ];

        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
    }

    return(
        <ClienteContext.Provider value={{clientesList: state.clientesList, obtenerClientes}}>
            {props.children}
        </ClienteContext.Provider>
    )
}
