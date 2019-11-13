import React, { useState } from 'react';
import '../style/Listen.css';

function Listen({url}) {

    const [isClicked, setClick] = useState(false);

    return(
        <div className={isClicked ? "soundWrap active" : "soundWrap"}>
            <div className="icon">
                <button className={isClicked ? "active" : ""} onClick={() => setClick(!isClicked)}></button>
            </div>
            <div className="soundfile">
            {url}
            </div>
        </div>
    );
}

export default Listen;