import React, { useContext, useState } from 'react'
import { ModalContext } from '../../context/modal/modalContext';

const FormCliente = () => {

    const {setShowModal} =  useContext(ModalContext);

    const clienteDefault = {
        nombre   : '',
        apellido : '',
        direccion: '',
        telefono : '',
        email    : ''
    }

    const [cliente, setCliente] = useState({clienteDefault});

    const handleChange = e => {
        setCliente({ ...cliente, [e.target.name] : e.target.value })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(cliente);
    }

    const cerrarModal = () => {
        setShowModal(false);
    }

    return ( 
        <form onSubmit={handleOnSubmit}>
            
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Nombre Completo</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={cliente.nombre}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                            <input
                                autoComplete="off"
                                className="input"
                                type="text"
                                placeholder="Apellidos"
                                name="apellido"
                                value={cliente.apellido}
                                onChange={handleChange}
                            />
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Dirección</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Ingrese su dirección"
                            name="direccion"
                            value={cliente.direccion}
                            onChange={handleChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-map-marked-alt"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Telefono</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Telefono"
                            name="telefono"
                            value={cliente.telefono}
                            onChange={handleChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-phone"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">e-Mail</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="email"
                            placeholder="Ingrese su e-Mail"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                        <button type="submit" className="button is-primary mr-1">Guardar</button>
                        <button
                            type="button"
                            className="button"
                            onClick={() => cerrarModal()}
                        >
                            Cancelar
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}
 
export default FormCliente;