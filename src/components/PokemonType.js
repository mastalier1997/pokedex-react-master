import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonType extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <a href="/grass">
          <span className={ 'label type type-' + this.props.name.toLowerCase() }>
            { this.props.name }
          </span>
        </a>
    );
  }
}

PokemonType.propTypes = {
  name: PropTypes.string.isRequired
}

export default PokemonType;
