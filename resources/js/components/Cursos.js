import React, { Component } from 'react';
import ModalCreateCourses from './recursos/modalCreateCourses';
import ModalDelete from './recursos/modalDelete';
import url from './recursos/url';

export default class Cursos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            form: {
                title: '',
                submit: '',
                nameCourse: '',
            },
        }

        this.handleListCourses = this.handleListCourses.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateCurse = this.handleCreateCurse.bind(this);
        this.handleInfoCourse = this.handleInfoCourse.bind(this);
        this.handleEditCourse = this.handleEditCourse.bind(this);
        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
    }

    componentDidMount() {
        this.handleListCourses();
    }

    handleOpenModal(key, submit, e, id = 0) {
        e.preventDefault();

        this.state.form.title = key;
        this.state.form.submit = submit;
        if (id != 0) {
            this.handleInfoCourse(id);
        }
        else {
            this.setState({
                form: {
                    ...this.state.form,
                    nameCourse: '',
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

    async handleListCourses() {
        let res = await fetch(`${url}api/courses`);
        let ListCourses = await res.json();
        this.setState({
            list: ListCourses
        });
    }

    async handleCreateCurse(e) {
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
            let res = await fetch(`${url}api/courses`, config);
            this.handleListCourses();
            $("#modalCourses").modal('hide');
        } catch (error) {
            console.log(error);
        }
    }

    async handleInfoCourse(id) {
        try {
            let res = await fetch(`${url}api/courses/${id}`);
            let InfoCourse = await res.json();
            this.setState({
                form: {
                    ...this.state.form,
                    id_course: InfoCourse.id_course,
                    nameCourse: InfoCourse.name_course,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async handleEditCourse(e) {
        e.preventDefault();
        const id = this.state.form.id_course;
        try {
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            };
            let res = await fetch(`${url}api/courses/${id}`, config);
            this.handleListCourses();
            $("#modalCourses").modal('hide');
        } catch (error) {
            console.log(error);
        }
    }

    async handleDeleteCourse(e) {
        e.preventDefault();
        const id = this.state.form.id_course;
        try {
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            };
            let res = await fetch(`${url}api/courses/${id}`, config);
            this.handleListCourses();
            $("#modalDelete").modal('hide');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { list, form } = this.state;
        return (
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="row justify-content-end mr-1 mb-3">
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalCourses" onClick={(event) => this.handleOpenModal('Añadir', this.handleCreateCurse, event)}>
                        Añadir Cursos
                </button>
                </div>

                <ModalCreateCourses
                    form={form}
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
                                <th>Cantidad de Cursos</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {list &&
                                list.map((list) => (
                                    <tr>
                                        <td>{list.name_course}</td>
                                        <td>{list.alumns_course}</td>
                                        <td><i className="fa fa-edit icon" data-toggle="modal" data-target="#modalCourses" onClick={(event) => this.handleOpenModal('Editar', this.handleEditCourse, event, list.id_course)}></i></td>
                                        <td><i className="fa fa-trash icon" data-toggle="modal" data-target="#modalDelete" onClick={(event) => this.handleOpenModal('Eliminar', this.handleDeleteCourse, event, list.id_course)}></i></td>
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