import React, { createContext, useReducer } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

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

        try {
            const resultado = await axios.get('/clientes');
    
            dispatch({
                type: OBTENER_CLIENTES,
                payload: resultado.data
            })
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener los clientes',
                toast: true
            });
        }
    }

    const registrarCliente = async cliente => {

        try {
            const resultado = await axios.post('/clientes', cliente);
    
            dispatch({
                type: REGISTRAR_CLIENTE,
                payload: resultado.data
            })

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente registrado correctamente',
                toast: true
            });
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el cliente',
                toast: true
            });
        }
    }

    const obtenerCliente = async cliente => {

        try {
            let clienteEncontrado = null;

            if(cliente !== null) {
                const resultado = await axios.get(`/clientes/${cliente.idCliente}`);
                clienteEncontrado = resultado.data;
            } else {
                clienteEncontrado = cliente;
            }

            dispatch({
                type: OBTENER_CLIENTE,
                payload: clienteEncontrado
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener el cliente',
                toast: true
            });
        }
    }

    const actualizarCliente = async cliente => {

        try {
            const resultado = await axios.put(`/clientes`, cliente);

            dispatch({
                type: MODIFICAR_CLIENTE,
                payload: resultado.data
            })

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente modificado correctamente',
                toast: true
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo modificar el cliente',
                toast: true
            });            
        }
    }

    const eliminarCliente = async idCliente => {

        try {
            await axios.delete(`/clientes/${idCliente}`);

            dispatch({
                type: ELIMINAR_CLIENTE,
                payload: idCliente
            })

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente eliminado correctamente',
                toast: true
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el cliente',
                toast: true
            });
        }
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
