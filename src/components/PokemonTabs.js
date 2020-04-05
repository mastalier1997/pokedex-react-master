import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PokemonType from './PokemonType';
import PokemonDescription from './PokemonDescription';
import PokemonEvolution from './PokemonEvolution';

class PokemonTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        types: [],
        abilities: [],
        descriptions: [],
        evolutions: []
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({pokemon: nextProps.pokemon});
  }

  getTypes() {
    let types = this.state.pokemon.types.map((currentValue, index, array) => {
      return (
        <PokemonType
          key={ index }
          name={ currentValue.name }
          />
      );
    });

    return types;
  }

  getAbilities() {
    let abilities = this.state.pokemon.abilities.map((currentValue, index, array) => {
      return (
        <li key={ index }> { currentValue.name } </li>
      );
    });

    return abilities;
  }

  getEvolutions() {
    let evolutions = this.state.pokemon.evolutions.map((currentValue, index, array) => {
      return (
        <PokemonEvolution
          key={ index }
          name={ currentValue.to } />
      );
    });

    return evolutions;
  }

  render() {
    return (
      <div className="col-md-6">
        <ul id="MyTabs" className="nav nav-tabs nav-justified" role="tablist">
          <li role="presentation"  className="active"><a href="#data" aria-controls="data" role="tab" data-toggle="tab">Data</a></li>
          <li role="presentation"><a href="#stats" aria-controls="stats" role="tab" data-toggle="tab">Stats</a></li>
          <li role="presentation"><a href="#evolution" aria-controls="evolution" role="tab" data-toggle="tab">Evolutions</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="data">
            <ul className="list-group">

              <PokemonDescription
                descriptions={ this.state.pokemon.descriptions } />

              <li className="list-group-item">
                <strong>Type</strong>
                <span className="pull-right">
                  { this.getTypes() }
                </span>
              </li>

              <li className="list-group-item">
                <strong>Height</strong>
                <span className="pull-right">{ this.props.pokemon.height }</span>
              </li>

              <li className="list-group-item">
                <strong>Weight</strong>
                <span className="pull-right">{ this.state.pokemon.weight }</span>
              </li>

              <li className="list-group-item">
                <strong>Abilities</strong>
                <ul>
                  { this.getAbilities() }
                </ul>
              </li>
            </ul>
          </div>

          <div role="tabpanel" className="tab-pane" id="stats">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>HP</strong>
                <span className="badge">{ this.props.pokemon.hp }</span>
              </li>
              <li className="list-group-item">
                <strong>Attack</strong>
                <span className="badge">{ this.props.pokemon.attack }</span>
              </li>
              <li className="list-group-item">
                <strong>Defense</strong>
                <span className="badge">{ this.props.pokemon.defense }</span>
              </li>
              <li className="list-group-item">
                <strong>Special Attack</strong>
                <span className="badge">{ this.props.pokemon.sp_atk }</span>
              </li>
              <li className="list-group-item">
                <strong>Special Defense</strong>
                <span className="badge">{ this.props.pokemon.sp_def }</span>
              </li>
              <li className="list-group-item">
                <strong>Speed</strong>
                <span className="badge">{ this.props.pokemon.speed }</span>
              </li>
              <li className="list-group-item">
                <strong>Total</strong>
                <span className="badge">{ this.props.pokemon.total }</span>
              </li>
            </ul>
          </div>

          <div role="tabpanel" className="tab-pane" id="evolution">
            { this.getEvolutions() }
          </div>
        </div>
      </div>
    );
  }
}

PokemonTabs.propTypes = {
  pokemon: PropTypes.any.isRequired
}

export default PokemonTabs;
