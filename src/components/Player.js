import React, { Component } from 'react';


class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_playing: false
        };
    }
    togglePlay() {
        this.setState({ is_playing: !this.state.is_playing });
    }

    render() {
        if (this.refs.player) {
            var player = this.refs.player;
            if (player.currentSrc !== this.props.sound) {
                player.src = this.props.sound;
            }
            if (player.paused) {
                if (this.state.is_playing) {
                    player.play();
                }
            }
            else if (!this.state.is_playing) {
                player.pause();
                player.load();
            }
        }

        var playerClassNames = {
            "playerItem": true,
            "play": !this.state.is_playing,
            "pause": this.state.is_playing
        };

        return (
            <div className="player" >
                <div className="soundIcon" onClick={this.togglePlay.bind(this)}>
                    <div className={classnames(playerClassNames)}></div>
                </div>
                <audio ref="player" autoPlay={this.state.is_playing}>
                    <source src={this.props.sound} />
                </audio>
            </div>
        );
    }
}

function classnames(obj) {
    var css = [];
    Object.keys(obj).forEach((key) => {
        if (obj[key]) {
            css.push(key);
        }
    });
    return css.join(' '); 
} 

export default Player;