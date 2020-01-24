import React, { Component } from 'react';

export default class modalDelete extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { form } = this.props;
        let name = "";
        if(form.nameAlumn){
            name = form.nameAlumn;
        }
        else if(form.nameCourse){
            name = form.nameCourse;
        }
        return (
            <div className="modal fade" id="modalDelete" tabIndex="-1" role="dialog" aria-labelledby="modalDeleteLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalDeleteLabel">{form.title} Registro</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => form.submit(e)} id="formAlumn">
                                <h3>Seguro desea eliminar el de gistro de: <b>"{name}"</b></h3>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" form="formAlumn" className="btn btn-danger">{form.title}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}