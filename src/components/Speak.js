import React, { useState } from 'react';
import '../style/Speak.css';

function Speak() {

    const [isClicked, setClick] = useState(false);

    return(
        <div className="speakWrap">
            <div className="icon">
                <button className={isClicked ? "active" : ""} onClick={() => setClick(!isClicked)}></button>
            </div>
            <div className={isClicked ? "record_modal active" : "record_modal"}>
                Modal
            </div>
        </div>
    );
}

export default Speak;