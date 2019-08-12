import React from 'react'
import PropTypes from 'prop-types'
import CharCard from './charCard';

const Board = (props) => {

    return (
        <ul className="board" >
            <CharCard
                characters={props.characters} />
        </ul>
    )
}

Board.propTypes = {
    charakters: PropTypes.array
}

export default Board
