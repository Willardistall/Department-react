import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import DepartmentsForm from './components/DepartmentsForm';
import DepartmentView from './components/DepartmentView';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";



const App = () => (
  <>
  <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:id/edit" component={DepartmentsForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
