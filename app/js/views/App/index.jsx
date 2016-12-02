import React, { Component } from 'react';

import MenuHeader from '../../components/Global/Menu';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <MenuHeader />

        { children }
      </div>
    );
  }
}
