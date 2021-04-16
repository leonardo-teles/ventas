import React, { useState } from 'react';

const Modal = (props) => {

    const cerrarModal = () => {
        console.log('cerrando...')
    }

    return ( 
        <div className={`modal ${showModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Crear Cliente</p>
                    <button 
                        className="delete" 
                        aria-label="close" 
                        onClick={() => cerrarModal()}
                    >
                    </button>
                </header>
                <section className="modal-card-body">
                    Contenido
                </section>
            </div>
        </div>
    );
}
 
export default Modal;
