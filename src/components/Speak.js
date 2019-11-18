import React, { useState } from 'react';
import '../style/Speak.css';

function Speak() {

    const [isClicked, setClick] = useState(false);

    return(
        <div className="speakWrap">
            <div className="icon">
                <button className={isClicked ? "active" : ""} onClick={() => setClick(!isClicked)}></button>
            </div>
            <div className={isClicked ? "record_modal active" : "record_modal"} onClick={() => setClick(!isClicked)}>
                <div className="modal-content">
                    <p>Hej. Denne funktion virker desværre ikke lige nu. Men hvis du har lyst til at indtale noget til dette billede, så gør det på din telefon og send til info@smkexplore.dk</p>
                </div>
            </div>
        </div>
    );
}

export default Speak;