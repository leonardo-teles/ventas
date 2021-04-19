import React, { createContext, useReducer } from 'react';

import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

import ClienteReducer from '../reducer/clienteReducer';
import { OBTENER_CLIENTES, REGISTRAR_CLIENTE, OBTENER_CLIENTE, MODIFICAR_CLIENTE, ELIMINAR_CLIENTE } from '../const/actionTypes';

export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
    
    const initialState = {
        clientesList: [],
        clienteActual: null
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);

    const obtenerClientes = async () => {

        const resultado = await axios.get('/clientes');

        dispatch({
            type: OBTENER_CLIENTES,
            payload: resultado.data
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

    const actualizarCliente = cliente => {
        dispatch({
            type: MODIFICAR_CLIENTE,
            payload: cliente
        })
    }

    const eliminarCliente = idCliente => {
        dispatch({
            type: ELIMINAR_CLIENTE,
            payload: idCliente
        })
    }

    return(
        <ClienteContext.Provider 
            value={{clientesList: state.clientesList, clienteActual: state.clienteActual,
                    obtenerClientes, 
                    registrarCliente, 
                    obtenerCliente,
                    actualizarCliente,
                    eliminarCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}
