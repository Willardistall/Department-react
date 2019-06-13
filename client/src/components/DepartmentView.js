import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Header, Segment, Icon } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    //  const { params: { id } } = this.props.match;
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  
  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.props.history.push("/departments")
        // const { departments, } = this.state;
        // this.setState({ departments: departments.filter( d => d.id !== id ), })
      })
  };

  // updateDepartment = (id) => {
  //   axios.put(`/api/departments/${this.props.match.params.id}`)
  //   .then( res => {
  //     const departments = this.state.departments.map( d => {
  //       if (d.id === id)
  //       return res.data;
  //       return d;
  //     });
  //     this.setState({ departments, });
  //   })
  //   debugger ***** COULDNT GET THIS TOO WORK? HARLAN HELPED REPLACE W/ 'COMP-DID-MOUNT'
  // };

  render() {
    const {department: { id, name, description, } } = this.state;
    //object destructure: performing same function.cleaner line
    // const name = this.state.department.name
    // const description = this.state.department.description

    return (
      <div>
        <Segment>
          <Header as="h1" color="grey">{ name }</Header>
          <Header as="h4"> { description } </Header>
          <p>ITEMS LIST HERE</p>
        </Segment>


        <br />
        <Button 
          color="black" 
          size="tiny"
          onClick={this.props.history.goBack}
        >
          BACK
          <Icon name="arrow left" />
        </Button>

        <Button 
          as={Link}
          to={`/departments/${id}/edit`}
          color="green" 
          size="tiny"
          onClick={this.updateDepartment}
        >
          + ITEM
        </Button>
        <Button 
          as={Link}
          to={`/departments/${id}/edit`}
          color="blue" 
          size="tiny"
          onClick={this.updateDepartment}
        >
          EDIT
          <Icon name="pencil" />
        </Button>
        <Button
          color="red"
          size="tiny"
          onClick={() => this.deleteDepartment()}
        >
          DELETE
        <Icon name="trash" />
      </Button>
      </div>
    )
  }
}

export default DepartmentView;