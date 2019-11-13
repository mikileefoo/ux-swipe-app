import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Listen from './Listen';
import Speak from './Speak';
import Info from './Info';
import '../style/swipe.css';

const styles = {
    slide: {
      minHeight: 100,
      color: '#fff',
      height: '100vh',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };

const imgData = [
    {title: 'Mandsportræt', artist: 'Wybrand de I Geest', img: {background: 'url(http://cspic.smk.dk/globus/30422951/img0020.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Moder', artist: 'Kathrine Ærtebjerg', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202009/kks2008-5-6.JPG)'}, soundurl: 'www.apple.com'},
    {title: 'Slangedræber', artist: 'Einar Utzon-Frank', img: {background: 'url(http://cspic.smk.dk/globus/40412321/img0656.jpg)'}, soundurl: 'www.apple.com'}
];

  const MyComponent = () => (
    <SwipeableViews enableMouseEvents>
      <div className="swipeWrap" style={Object.assign({}, styles.slide, styles.slide1)}>
        <div style={Object.assign({}, imgData[0].img)} className="itemWrap">
            <div className="bottomWrap">
                <Listen url={imgData[0].soundurl} />    
                <Info title={imgData[0].title} artist={imgData[0].artist} />
                <Speak />
            </div>
        </div>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <div style={Object.assign({}, imgData[1].img)} className="itemWrap">
            <div className="bottomWrap">   
                <Info title={imgData[1].title} artist={imgData[1].artist} />
                <Speak />
            </div>
        </div>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <div style={Object.assign({}, imgData[2].img)} className="itemWrap">
            <div className="bottomWrap">
                <Listen url={imgData[2].soundurl} />    
                <Info title={imgData[2].title} artist={imgData[2].artist} />
                <Speak />
            </div>
        </div>
      </div>
    </SwipeableViews>
  );
  
  export default MyComponent;