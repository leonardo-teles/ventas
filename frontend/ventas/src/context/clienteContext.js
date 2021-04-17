import React, { createContext, useReducer } from 'react';
import ClienteReducer from '../reducer/clienteReducer';

export default ClienteContext = createContext();

export default ClienteContextProvider = props => {
    
    const initialState = {
        clientesList: []
    }

    const [state, dispatch] = useReducer(ClienteReducer, initialState);
}
