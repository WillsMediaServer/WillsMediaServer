import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';

import * as _ from 'underscore';

import pauseIcon from '../../assets/pause-solid.svg';
import playIcon from '../../assets/play-solid.svg';
import randomIcon from '../../assets/random-solid.svg';
import redoIcon from '../../assets/redo-alt-solid.svg';
import stepBackwardIcon from '../../assets/step-backward-solid.svg';
import stepForwardIcon from '../../assets/step-forward-solid.svg';
import volumeDownIcon from '../../assets/volume-down-solid.svg';
import volumeOffIcon from '../../assets/volume-off-solid.svg';
import volumeUpIcon from '../../assets/volume-up-solid.svg';

import './mediaBar.scss';

class MediaBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            currentTime: 0,
            currentPercent: "0%",
            song: {
                name: "Example Song",
                artists: "Jerry Songy",
                album: "A Song Compilation",
                cover: "https://via.placeholder.com/100x100",
                audio: "https://p.scdn.co/mp3-preview/764669c4a1799782b44c9e31f814da31f0911a5f?cid=9714921402b84783b2a207f1b6e82612",
                duriation: 30
            }
        };

        this.playPause = this.playPause.bind(this);
    }
    
    playPause() {
        const audio = document.getElementsByClassName("player-audio")[0];
        const _this = this;

        if (this.state.playing) {
            audio.pause();
        } else {
            audio.play();
        }

        setInterval(function() {
            let currentTime = audio.currentTime;
            let percentage = (currentTime / _this.state.song.duriation) * 100 + "%";
            _this.updateTime(currentTime, percentage)
        }, 100);

        this.setState({playing: !this.state.playing});
    }

    resize() {
        this.forceUpdate();
    }

    timestamp(timestamp) {
        let minutes = Math.floor(timestamp / 60);
        let seconds = timestamp - (minutes * 60);
        if (seconds < 10) { seconds = '0' + seconds; }
        timestamp = minutes + ':' + seconds;
        return timestamp;
    }

    updateTime(timestamp, percentage) {
        timestamp = Math.floor(timestamp);
        this.setState({
            currentTime: timestamp,
            currentPercent: percentage
        });
    }

    componentDidMount() {
        window.addEventListener('resize', _.debounce(this.resize.bind(this), 50))
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this))
    }

    render() {
        const width = window.innerWidth;
        const currentPercent = this.state.currentPercent;
        const { name, artists, album, cover, audio } = this.state.song;

        if (width > 850) {
            return (
                <section className="player">
                    <section className="player-left">
                        <img className="song-cover" src={cover} alt={name + " Cover Art"}/>
                        <section className="song-info">
                            <p className="song-title">{name}</p>
                            <p className="song-album">{album}</p>
                            <p className="song-artist">{artists}</p>
                        </section>
                    </section>
    
                    <section className="player-center">
                        <section className="controls">
                            <SVGInline className="btn" svg={randomIcon}/>
                            <SVGInline className="btn" svg={stepBackwardIcon}/>
                            {this.state.playing ? (
                                <SVGInline className="btn" svg={pauseIcon} onClick={this.playPause}/>
                            ) : (
                                <SVGInline className="btn" svg={playIcon} onClick={this.playPause}/>
                            ) }
                            <SVGInline className="btn" svg={stepForwardIcon}/>
                            <SVGInline className="btn" svg={redoIcon}/>
                        </section>
                        
                        <audio className="player-audio">
                            <source src={audio}/>
                        </audio>

                        <section className="timeline">
                            <span className="timeline-current">{ this.timestamp(this.state.currentTime) }</span>
                            <section className="slider-bar timeline-slider">
                                <span className="slider-value timeline-value" style={{width: currentPercent}}></span>
                            </section>
                            <span className="timeline-total">{ this.timestamp(this.state.song.duriation) }</span>
                        </section>
                    </section>
    
                    <section className="player-right">
                        <SVGInline className="icon-volume" svg={volumeDownIcon}/>
                        <section className="slider-bar volume-slider">
                            <span className="slider-value" style={{width: "85%"}}></span>
                        </section>
                    </section>
                </section>
            );
        } else {
            return (
                <section className="player-mobile">
                    <section className="player-mobile-left">
                        <img className="song-cover" src={cover} alt={name + " Cover Art"}/>
                        <section className="song-info">
                            <p className="song-title">{name}</p>
                            <p className="song-album">{album}</p>
                            <p className="song-artist">{artists}</p>
                        </section>
                    </section>
                    
                    <section className="player-mobile-right">
                        <SVGInline className="btn" svg={stepBackwardIcon}/>
                        {this.state.playing ? (
                            <SVGInline className="btn" svg={pauseIcon} onClick={this.playPause}/>
                        ) : (
                            <SVGInline className="btn" svg={playIcon} onClick={this.playPause}/>
                        ) }
                        <SVGInline className="btn" svg={stepForwardIcon}/>
                    </section>

                    <audio className="player-audio">
                        <source src={audio}/>
                    </audio>

                    <section className="timeline-mobile-bar">
                        <section className="timeline-mobile-value" style={{width: currentPercent}}></section>
                    </section>
                </section>
            );
        }
    }
}

export default MediaBar;