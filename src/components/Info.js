import React from 'react';

function Info({title, artist}) {
    return(
        <div className="info">
            <span className="title">{title}</span>
            <span className="artist">{artist}</span>
        </div>
    );
}

export default Info;