import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Popup from "reactjs-popup";

import Modal from './modal';

import charCard from '../funcComponents/charCard';

export default class Card extends Component {

    render() {

        const { characters } = this.props;

        const btns = characters.map(({ name, imageUrl, randomQuote, fiveQuotes }, ind) => {
            return (
                <li key={ind}>
                    <Popup trigger={
                        charCard(name, imageUrl, randomQuote)
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
charCard.propTypes = {
    charakters: PropTypes.array
}
