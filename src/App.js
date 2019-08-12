import React, { Component } from 'react';
import Board from './components/board';
import './scss/style.scss';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
    }
  }

  randomNumber = (array) => {
    const min = 0;
    const max = array.length - 1;
    const rand = min + (Math.random() * (max - min));

    return Math.round(rand);
  }

  componentDidMount() {
    const names = [
      'Leela',
      'Fry',
      'Bender',
      'Professor-Farnsworth',
      'Zapp-Brannigan',
      'Lurr',
      'Dr-Zoidberg',
      'Amy',
      'Bob-Barker',
      'Hermes'
    ];
    const request = names.map(name =>
      fetch(`http://futuramaapi.herokuapp.com/api/characters/${name}`)
        .then(response => response.ok
          ?
          response.json()
          :
          Promise.reject('ups... something went wrong'))
    );
    Promise.all(request)
      .then(cuttedVals => {

        let orderedVals = cuttedVals.map(arr => {
          return [
            arr[0]
              .character,
            arr[0]
              .image,
            arr[
              this.randomNumber(arr)
            ].quote,
            arr
              .slice(0, 5)
              .map((element) => element.quote)
          ]
        })
        this.setState({
          characters: orderedVals
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    const { characters } = this.state;

    return (
      <div className="board" >
        {characters.length === 0 ? <h2 className="loader">Loading...</h2> : <>
          <h1>Futurama characters</h1>
          <Board characters={characters} />
        </>}
      </div>
    )
  }
}

export default App