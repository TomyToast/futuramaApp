import React, { Component } from 'react';

import smallPopup from "../funcComponents/smallPopup";

export default class Modal extends Component {
    render() {

        const { close, name, quotes } = this.props;

        const popupList = quotes.map((quote, ind) => {
            return (
                <li key={ind} className="popupElement" >
                    <blockquote cite={`${name}'s quote`}>
                        "{quote}"
                    </blockquote>
                </li >
            )
        })

        return (
            <div className="modalWindow" >
                <button className="close" onClick={close}>
                    &times;
                </button>
                <h2 className="header">
                    {name}'s quotes
                </h2>
                <div className="content">
                    <ul className="popupList">
                        {popupList}
                    </ul>
                </div>
                <div className="actions">
                    {(quotes.length >= 5)
                        ?
                        null
                        :
                        smallPopup()
                    }
                    <button className="button" onClick={() => close()}>
                        close modal
                    </button>
                </div>
            </div>
        )
    }
}
