import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Alumnos from './components/Alumnos';
import Cursos from './components/Cursos';
import NotFound from './components/NotFound';

function Proyecto() {
    return (
        <BrowserRouter>
            <NavBar />
            <section className="row justify-content-center">
                <Switch>
                    <Route exact path="/" component={Alumnos} />
                    <Route exact path="/cursos" component={Cursos} />
                    <Route component={NotFound} />
                </Switch>
            </section>
        </BrowserRouter>
    );
}

export default Proyecto;

if (document.getElementById('Proyecto')) {
    ReactDOM.render(<Proyecto />, document.getElementById('Proyecto'));
}
