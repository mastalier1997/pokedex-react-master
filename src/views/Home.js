import React from 'react';
import Reflux from 'reflux';

import PokemonStore from '../stores/PokemonStore';
import Actions from '../actions/Actions';

import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';

class Home extends Reflux.Component {
  constructor() {
    super();

    this.state = {};
    this.store = PokemonStore;
    this.storeKeys = ['data'];
  }

  componentDidMount() {
    Actions.getPokemons();
  }

  render() {
    let pokemons = this.state.data.map((currentValue, index, array) => {
        return(
            <PokemonCard
                key={ index }
                avatar={ "img/pokemons/" +  currentValue.name.toLowerCase()  +".jpg" }
                pokemon={ currentValue }
                />
        );
    });

    return (
      <div className="Home">
        <Header title="Pokedex" />

        <div className="row">
          { pokemons }
        </div>
      </div>
    );
  }
}

export default Home;
