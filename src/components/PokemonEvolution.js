import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonEvolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps });
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="thumbnail">
          <img src={ "/img/pokemons/" +  this.props.name.toLowerCase()  +".jpg" } alt={ this.props.name } />
          <div className="caption">
            <h3>{ this.props.name }</h3>
          </div>
        </div>
      </div>
    );
  }
}

PokemonEvolution.propTypes = {
  name: PropTypes.string.isRequired
}

export default PokemonEvolution;
