import { OBTENER_CLIENTES, REGISTRAR_CLIENTE, OBTENER_CLIENTE, MODIFICAR_CLIENTE } from "../const/actionTypes";


const clienteReducer = (state, action) => { 

    switch (action.type) {

        case OBTENER_CLIENTES:
            return {
                ...state, clientesList: action.payload
            };

        case REGISTRAR_CLIENTE:
            return {
                ...state, clientesList: [...state.clientesList, action.payload]
            };  
            
        case OBTENER_CLIENTE:
            return {
                ...state, clienteActual: action.payload
            }; 
            
        case MODIFICAR_CLIENTE:
            return {
                ...state, clientesList: state.clientesList.map(
                    cliente => cliente.idCliente === action.payload.idCliente ? action.payload : cliente
                )
            }    

        default:
            return state;
    }
}

export default clienteReducer;