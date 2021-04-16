import React, { createContext } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = props => {
    
    const[showModal, setShowModal] =  useState(false);
    const[modalTitle, setModalTitle] =  useState('');

    return(
        <ModalContext.Provider value={ { showModal, modal, setShowModal, setModalTitle } }>
            {props.children}
        </ModalContext.Provider>
    )
}
