import React from 'react';
import Reflux from 'reflux';

import PokemonStore from '../stores/PokemonStore';
import Actions from '../actions/Actions';

import PropTypes from 'prop-types';

class PokemonDescription extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = PokemonStore;
    this.storeKeys = ['dataDescription'];
    this.state = {
      description: '--'
    };
  }

  componentWillReceiveProps(nextProps) {
    Actions.getPokemonDescription(nextProps.descriptions[0].resource_uri);
  }

  render() {
    return (
        <li className="list-group-item">
          <strong>Description</strong>
          <p>{ this.state.dataDescription.description }</p>
        </li>
    );
  }
}

PokemonDescription.propTypes = {
  descriptions: PropTypes.array.isRequired
}

export default PokemonDescription;
