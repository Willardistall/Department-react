import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, } from "semantic-ui-react";

const Departments = (props) => {
  const [departments, setDepartments] = useState([]);

  useEffect( () => {
    axios.get("/api/departments")
    .then( res => {
      setDepartments (res.data);
    })
  }, []);

  const  renderDepartments = () => {
    if (departments.length <= 0)
      return <Header as="h2">No Departments</Header>
    return departments.map( department => (
      <Card key= { department.id} >
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
          <Card.Description>
          { department.description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
            View Dept.
          </Button>
        </Card.Content>
      </Card>
    ));
  };

    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="/departments/new">
        Add Dept.
        </Button>
        <br />
        <br />
        <Card.Group>
          { renderDepartments() }
        </Card.Group>
      </div>
      );
    };
  

export default Departments;