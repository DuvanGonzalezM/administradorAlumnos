import React, { Component } from 'react';

export default class modalCreateAlumn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { form, onChange } = this.props;
        return (
            <div className="modal fade" id="modalCourses" tabIndex="-1" role="dialog" aria-labelledby="modalCoursesLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCoursesLabel">{form.title} Curso</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => form.submit(e)} id="formAlumn">
                                <div className="form-row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <label htmlFor="nameCourse">Nombre del Curso</label>
                                        <input type="text" className="form-control" id="nameCourse" name="nameCourse" placeholder="Ingrese el nombre del curso" value={form.nameCourse} onChange={onChange} required />
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