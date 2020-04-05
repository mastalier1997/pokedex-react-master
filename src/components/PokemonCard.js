import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonType from './PokemonType';

class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let types = this.props.pokemon.type.map((currentValue, index, array) => {
      return (
        <PokemonType
          key={ index }
          name={ currentValue } />
      );
    });
    return (
      <div className="col-md-3">
        <div className="pokemon panel panel-primary">
          <div className="panel-heading">
            <h1>
              { this.props.pokemon.name }
              <span className="label label-primary pull-right">#{ this.props.pokemon.id }</span>
            </h1>
          </div>
          <div className="panel-body">
            <Link to={"/pokemon/" + this.props.pokemon.name.toLowerCase() } >
              <img className="avatar center-block" src={ this.props.avatar } alt={ this.props.pokemon.name } />
            </Link>
          </div>
          <div className="panel-footer">
            <div className="text-center">
              { types }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired
}

export default PokemonCard;
