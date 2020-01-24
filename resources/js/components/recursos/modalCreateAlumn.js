import React, { Component } from 'react';

export default class modalCreateAlumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { courses, form, onChange } = this.props;
        return (
            <div className="modal fade" id="modalAlumns" tabIndex="-1" role="dialog" aria-labelledby="modalAlumnsLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalAlumnsLabel">{form.title} Alumno</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => form.submit(e)} id="formAlumn">
                                <div className="form-row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <label htmlFor="nameAlumn">Nombre del Alumno</label>
                                        <input type="text" className="form-control" id="nameAlumn" name="nameAlumn" placeholder="Ingrese el nombre del alumno" value={form.nameAlumn} onChange={onChange} required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <label htmlFor="phoneAlumn">Telefono del Alumno</label>
                                        <input type="text" className="form-control" id="phoneAlumn" name="phoneAlumn" placeholder="Ingrese el telefono del alumno" value={form.phoneAlumn} onChange={onChange} required data-mask="300 000 0000" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <label htmlFor="emailAlumn">Correo Electronico del Alumno</label>
                                        <input type="email" className="form-control" id="emailAlumn" name="emailAlumn" placeholder="Ingrese el correo electronico del alumno" value={form.emailAlumn} onChange={onChange} required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                        <label htmlFor="courseAlumn">Curso del Alumno</label>
                                        <select className="form-control" id="courseAlumn" name="courseAlumn" value={form.courseAlumn} onChange={onChange} required>
                                            <option key="0" value="">Selecione ...</option>
                                            {courses &&
                                                courses.map((curse, index) => (
                                                    <option key={index + 1} value={curse.id_course}>{curse.name_course}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" form="formAlumn" className="btn btn-success">{form.title}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}