import React from 'react'

const FormCliente = () => {
    return ( 
        <form>
            
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
                                name="nombres"
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
                                name="apellidos"
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