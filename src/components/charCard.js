import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import Modal from './modal';

export default class CharCard extends Component {

    render() {

        const { characters } = this.props;

        const btns = characters.map(({ name, imageUrl, randomQuote, fiveQuotes }, ind) => {
            return (
                <li key={ind}>
                    <Popup trigger={
                        <div className="charCard" >
                            <h2 className="name">{name}</h2>
                            <img
                                src={imageUrl}
                                className="image"
                                alt={`this is ${name}`} />
                            <blockquote
                                className="randomQuote">
                                " {randomQuote} "
                            </blockquote>
                        </div>
                    } modal key={ind} >
                        {close => (
                            <Modal close={close} name={name} quotes={fiveQuotes} />
                        )}
                    </Popup>
                </li>
            )
        })

        return (
            <>
                {btns}
            </>
        )
    }
}
CharCard.propTypes = {
    charakters: PropTypes.array
}
