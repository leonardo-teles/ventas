import React, { createContext, useReducer } from 'react';

import {v4 as uuidv4} from 'uuid';

import ClienteReducer from '../reducer/clienteReducer';
import { OBTENER_CLIENTES, REGISTRAR_CLIENTE, OBTENER_CLIENTE } from '../const/actionTypes';

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
    
    const initialState = {
        clientesList: [],
        clienteActual: null
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

    const registrarCliente = cliente => {

        let clienteNuevo = {
            ...cliente, idCliente: uuidv4()
        }

        dispatch({
            type: REGISTRAR_CLIENTE,
            payload: clienteNuevo
        })
    }

    const obtenerCliente = cliente => {
        dispatch({
            type: OBTENER_CLIENTE,
            payload: cliente
        })
    }

    return(
        <ClienteContext.Provider 
            value={{clientesList: state.clientesList, clienteActual: state.clienteActual,
                    obtenerClientes, 
                    registrarCliente, 
                    obtenerCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}
