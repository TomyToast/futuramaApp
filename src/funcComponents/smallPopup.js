import React from 'react';
import Popup from "reactjs-popup";

const smallPopup = () => {
    return (
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
    )
}

export default smallPopup
