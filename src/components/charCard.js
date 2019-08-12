import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

export default class CharCard extends Component {

    render() {

        const { characters } = this.props;

        const btns = characters.map((hero, ind) => {
            return (
                <li key={ind}>
                    <Popup trigger={
                        <div className="charCard" >
                            <h2 className="name">{hero[0]}</h2>
                            <img
                                src={hero[1]}
                                className="image"
                                alt={`this is ${hero[0]}`} />
                            <blockquote
                                className="randomQuote">
                                " {hero[2]} "
                </blockquote>
                        </div>
                    } modal key={ind} >
                        {close => (
                            <div className="modalWindow">
                                <button
                                    className="close"
                                    onClick={close}
                                >
                                    &times;
                    </button>
                                <h2 className="header">
                                    {hero[0]}'s quotes
                        </h2>
                                <div className="content">
                                    <ul className="popupList">
                                        {hero[3]
                                            .map((quote, ind) => {
                                                return (
                                                    <li key={ind}
                                                        className="popupElement"
                                                    >
                                                        <blockquote
                                                            cite={`${hero[0]}'s quote`}
                                                        >
                                                            "{quote}"
                                        </blockquote>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </div>
                                <div className="actions">
                                    {(hero[3].length >= 5)
                                        ?
                                        null
                                        :
                                        <Popup
                                            trigger={
                                                <button className="button"> Tip </button>
                                            }
                                            position="top center"
                                            closeOnDocumentClick
                                        >
                                            <span className="button_tip">
                                                Sometimes API offers less then five quotes...
                            </span>
                                        </Popup>
                                    }
                                    <button
                                        className="button"
                                        onClick={() => {
                                            close();
                                        }}
                                    >
                                        close modal
                    </button>
                                </div>
                            </div>
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
