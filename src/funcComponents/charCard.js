import React from 'react'

const charCard = (name, imageUrl, randomQuote) => {

    return (
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
    )
}

export default charCard

