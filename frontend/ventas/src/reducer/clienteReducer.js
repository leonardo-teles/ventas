import { OBTENER_CLIENTES, REGISTRAR_CLIENTE } from "../const/actionTypes";


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

        default:
            return state;
    }
}

export default clienteReducer;