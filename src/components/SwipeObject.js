import React from 'react';
import Info from './Info';

function SwipeObject() {

    return(
        <div className="swipeWrap">
        <div style={Object.assign({}, this.props.swipeobject.img)} className="itemWrap">
            <div className="bottomWrap">   
                <Info title={this.props.swipeobject.title} artist={this.props.swipeobject.artist} />
            </div>
        </div>
      </div>
    );
}

export default SwipeObject;