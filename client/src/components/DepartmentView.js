import React from "react";
import axios from "axios";
import { Button, Header, Segment, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    const {id,} = this.props.match.params.id;
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  render() {
    const { product: name, description,} = this.state;

    return (
      <div>
        <Segment>
          <Header as="h1" color="grey">{ name }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default DepartmentView;