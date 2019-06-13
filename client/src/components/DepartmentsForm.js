import React from 'react';
import axios from "axios";
import { Form, Header, Icon } from "semantic-ui-react";

class DepartmentsForm extends React.Component {
  defaultValues = { name: "", description: "",};
  state = { ...this.defaultValues, };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) 
    axios.get(`/api/departments/${id} `)
    .then(res => {
      const { name, description } = res.data;
      this.setState({ name, description })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state, };
    const { id } = this.props.match.params;
    if (id) {
      axios.put(`/api/departments/${id}`, department)
      .then(res => {
        this.props.history.push(`/departments/${id}`)
      })
    } else {
      axios.post("/api/departments", department)
      .then( res => {
        this.props.history.push("/departments");
      })
      this.setState({ ...this.defaultValues, });
    }
  }

  handleChange = (e, { name, value, }) =>
    this.setState({ [name]: value, });
  

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        { id ? 
       <Header as='h1'>Edit Dept.</Header>
      : <Header as="h1">New Dept.</Header>
      } 
      {/* Harlan Helped with this logic, thanks pal! ^^^ */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
          <Form.Button 
          color="black" 
          size="tiny"
          onClick={this.props.history.goBack}
        >
          BACK
          <Icon name="arrow left" />
        </Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentsForm;