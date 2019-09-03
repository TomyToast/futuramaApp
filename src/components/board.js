import React, { Component } from 'react';
import CharCard from './charCard';

class Board extends Component {

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

        let request = names.map(name =>
            fetch(`http://futuramaapi.herokuapp.com/api/characters/${name}`)
                .then(response => response.ok
                    ?
                    response.json()
                    :
                    Promise.reject('ups... something went wrong')
                ));
        // .then(data => {
        //     let name = data[0].character;
        //     let obj = {};
        //     for (let prop in data) {
        //         obj[data[data.length].character] = data[prop]
        //     }
        //     console.log(obj)
        // })
        // .then(values => {
        //     console.log(values)
        // })
        //     )
        // }
        // console.log(obj)
        // data.map(elm => {
        //     console.log(elm.quote)

        // })
        //             return (
        //     {
        //         names: data[0].character,
        //         imageUrl: data[0].image,
        //     }
        // )
        // data.map(elm => {
        //     let names = [elm.character]
        //     console.log(names[0])
        // console.log(elm)
        // elm.character
        // name:
        // imageUrl: elm.image,
        // randomQuote: elm.quote,
        // fiveQuotes: arr.slice(0, 5).map((element) => element.quote)

        // })
        // .then(values => {
        //     console.log(values)
        // })
        // )
        Promise.all(request)
            .then(cuttedVals => {

                let orderedVals = cuttedVals.map(arr => {
                    return {
                        name: arr[0].character,
                        imageUrl: arr[0].image,
                        randomQuote: arr[this.randomNumber(arr)].quote,
                        fiveQuotes: arr.slice(0, 5).map((element) => element.quote)
                    }
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
                {
                    characters.length === 0 ? <h2 className="loader">Loading...</h2>
                        :
                        <>
                            <h1>Futurama's characters</h1>
                            <ul className="board" >
                                <CharCard
                                    characters={characters} />
                            </ul>
                        </>
                }
            </div>
        )
    }
}


export default Board
