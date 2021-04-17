import { OBTENER_CLIENTES } from "../const/actionTypes";

export default (state, action) => {

    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state, clientesList: action.payload
            };

        default:
            return state;
    }
}