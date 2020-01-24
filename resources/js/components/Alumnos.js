import React, { Component } from 'react';
import ModalCreateAlumn from './recursos/modalCreateAlumn';
import ModalDelete from './recursos/modalDelete';
import url from './recursos/url';

export default class Alumnos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            courses: [],
            form: {
                title: '',
                submit: '',
                nameAlumn: '',
                phoneAlumn: '',
                emailAlumn: '',
                courseAlumn: '',
            },
        }

        this.handleListAlumns = this.handleListAlumns.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateAlumn = this.handleCreateAlumn.bind(this);
        this.handleListAlumn = this.handleListAlumn.bind(this);
        this.handleInfoAlumn = this.handleInfoAlumn.bind(this);
        this.handleEditAlumn = this.handleEditAlumn.bind(this);
        this.handleDeleteAlumn = this.handleDeleteAlumn.bind(this);
    }

    componentDidMount() {
        this.handleListAlumn();
        this.handleListAlumns();
    }

    async handleListAlumns() {
        try {
            let res = await fetch(`${url}api/alumns`);
            let ListAlumns = await res.json();
            this.setState({
                list: ListAlumns
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleOpenModal(key, submit, e, id = 0) {
        e.preventDefault();

        this.state.form.title = key;
        this.state.form.submit = submit;
        if (id != 0) {
            this.handleInfoAlumn(id);
        }
        else {
            this.setState({
                form: {
                    ...this.state.form,
                    nameAlumn: '',
                    phoneAlumn: '',
                    emailAlumn: '',
                    courseAlumn: '',
                }
            });
        }
    }

    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    async handleCreateAlumn(e) {
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            };
            let res = await fetch(`${url}api/alumns`, config);
            this.handleListAlumns();
            $("#modalAlumns").modal('hide');
        } catch (error) {
            console.log(error);
        }
    }

    async handleListAlumn() {
        try {
            let res = await fetch(`${url}api/courses`);
            let ListCurses = await res.json();
            this.setState({
                courses: ListCurses
            });
        } catch (error) {
            console.log(error);
        }
    }

    async handleInfoAlumn(id) {
        try {
            let res = await fetch(`${url}api/alumns/${id}`);
            let InfoAlumn = await res.json();
            this.setState({
                form: {
                    ...this.state.form,
                    id_alumn: InfoAlumn.id_alumn,
                    nameAlumn: InfoAlumn.name_alumn,
                    phoneAlumn: InfoAlumn.phone_alumn,
                    emailAlumn: InfoAlumn.email_alumn,
                    courseAlumn: InfoAlumn.FK_course_alumn,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async handleEditAlumn(e) {
        e.preventDefault();
        const id = this.state.form.id_alumn;
        try {
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            };
            let res = await fetch(`${url}api/alumns/${id}`, config);
            this.handleListAlumns();
            $("#modalAlumns").modal('hide');
        } catch (error) {
            console.log(error);
        }
    }

    async handleDeleteAlumn(e) {
        e.preventDefault();
        const id = this.state.form.id_alumn;
        try {
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            };
            let res = await fetch(`${url}api/alumns/${id}`, config);
            this.handleListAlumns();
            $("#modalDelete").modal('hide');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { list, courses, form } = this.state;
        return (
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="row justify-content-end mr-1 mb-3">
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalAlumns" onClick={(event) => this.handleOpenModal('Añadir', this.handleCreateAlumn, event)}>
                        Añadir Alumnos
                    </button>
                </div>

                <ModalCreateAlumn
                    form={form}
                    courses={courses}
                    onChange={this.handleChange}
                />

                <ModalDelete
                    form={form}
                />

                <div className="col-lg-12 col-md-12 col-sm-12 text-center container p-3">

                    <h2>Lista de Alumnos</h2>

                    <table className="table table-striped table-dark mt-3">
                        <thead className="table-head">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Curso</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {list &&
                                list.map((list, index) => (
                                    <tr key={index}>
                                        <td>{list.name_alumn}</td>
                                        <td>{list.email_alumn}</td>
                                        <td>{list.phone_alumn}</td>
                                        <td>{list.course_alumn}</td>
                                        <td><i className="fa fa-edit icon" data-toggle="modal" data-target="#modalAlumns" onClick={(event) => this.handleOpenModal('Editar', this.handleEditAlumn, event, list.id_alumn)}></i></td>
                                        <td><i className="fa fa-trash icon" data-toggle="modal" data-target="#modalDelete" onClick={(event) => this.handleOpenModal('Eliminar', this.handleDeleteAlumn, event, list.id_alumn)}></i></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}