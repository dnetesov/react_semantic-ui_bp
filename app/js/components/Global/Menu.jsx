import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class MenuHeader extends Component {

  constructor(props) {
    super(props);

    this.state = { activeItem: 'users' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className='Menu'>
        <Menu>
          <Menu.Item
            name='users'
            active={activeItem === 'users'}
            onClick={this.handleItemClick}
          >
            <Link to='/'>Users</Link>
          </Menu.Item>

          <Menu.Item
            name='details'
            active={activeItem === 'details'}
            onClick={this.handleItemClick}
          >
            <Link to='/users/1'>details</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
