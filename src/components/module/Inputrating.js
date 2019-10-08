import React, { Component } from 'react';
import Instance from "../InstanceList/Instance";


class Inputrating extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="rating"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default Inputrating;