import './AudioPlayer.scss';
import React, { useState, useEffect } from 'react';
class AudioPlayer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      playFlag: false,
    };
    this.audio = null;
  }
  handleClick = e => {
    e.stopPropagation();
    this.setState({
      playFlag: !this.state.playFlag,
    });
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };
  onAudioStop = () => {
    let { playFlag } = this.state;
    if (playFlag) {
      this.setState({
        playFlag: false,
      });
    }
  };
  onAudioPlay = () => {
    let { playFlag } = this.state;
    if (!playFlag) {
      this.setState({
        playFlag: true,
      });
    }
  };
  componentDidMount() {
    this.audio.addEventListener('ended', this.onAudioStop, false);
    this.audio.addEventListener('pause', this.onAudioStop, false);
    this.audio.addEventListener('play', this.onAudioPlay, false);
  }
  componentWillUnmount() {
    this.audio.removeEventListener('ended', this.onAudioStop);
    this.audio.removeEventListener('pause', this.onAudioStop);
    this.audio.removeEventListener('play', this.onAudioPlay);
  }
  componentWillReceiveProps(next) {
    if (next.src === this.props.src) {
      return;
    } else {
      if (this.state.playFlag) {
        this.setState({ playFlag: false });
      }
      this.audio.pause();
      this.audio.load();
    }
  }
  render() {
    let { src, style } = this.props;
    let { playFlag } = this.state;
    return (
      <div
        style={style}
        className={playFlag ? 'audio-player playing' : 'audio-player'}
        onClick={this.handleClick}
      >
        <audio
          controls={true}
          preload="auto"
          autoPlay={false}
          ref={node => {
            this.audio = node;
          }}
          style={{ display: 'none' }}
        >
          <source src={src} />
        </audio>
        <span
          className={playFlag ? 'play-flag playing' : 'play-flag'}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
export default AudioPlayer;
