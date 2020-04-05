import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonImage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="col-md-6">
        <img className="avatar center-block" src={ this.props.avatar } alt="Pokemon" />
      </div>
    );
  }
}

PokemonImage.propTypes = {
  avatar: PropTypes.string.isRequired
}

export default PokemonImage;
