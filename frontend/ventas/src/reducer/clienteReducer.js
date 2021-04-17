import { OBTENER_CLIENTES, REGISTRAR_CLIENTE, OBTENER_CLIENTE } from "../const/actionTypes";


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

        default:
            return state;
    }
}

export default clienteReducer;