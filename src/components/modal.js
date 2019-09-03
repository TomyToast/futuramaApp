import React, { Component } from 'react';
import Popup from "reactjs-popup";

export default class Modal extends Component {
    render() {

        const { close, name, quotes } = this.props;

        return (
            <div>
                <div className="modalWindow">
                    <button
                        className="close"
                        onClick={close}
                    >
                        &times;
                    </button>
                    <h2 className="header">
                        {name}'s quotes
                    </h2>
                    <div className="content">
                        <ul className="popupList">
                            {quotes
                                .map((quote, ind) => {
                                    return (
                                        <li key={ind}
                                            className="popupElement"
                                        >
                                            <blockquote
                                                cite={`${name}'s quote`}
                                            >
                                                "{quote}"
                                </blockquote>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                    <div className="actions">
                        {(quotes.length >= 5)
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
            </div>
        )
    }
}
