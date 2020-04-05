import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="page-header">
          <h1>
            { this.props.title }
            { this.props.isPokemon ? (
                <span className="label label-primary pull-right">#{this.props.number}</span>
              )
              :
              (
                ""
              )
            }
          </h1>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isPokemon: PropTypes.bool,
  number: PropTypes.number
}

export default Header;
