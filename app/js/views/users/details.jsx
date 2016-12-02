import React, { Component } from 'react';

export default class UsersDetails extends Component {
  render() {
    return (
      <div>User details: { this.props.params.id }</div>
    );
  }
}
