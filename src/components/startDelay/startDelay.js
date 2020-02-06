import React, { Component } from 'react';
import * as GLOBALCONST from '../const';
import * as CONST from './const';
import { Redirect } from 'react-router';
import Ten from '../sound/ten.mp3';
import Five from '../sound/five.mp3';
import Beep from '../sound/BeepNext.mp3';

export default class StartDelay extends Component {
  interval;

  state = {
    delay: CONST.delayInSeconds,
    redirect: false
  };

  style = {
    height: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexFlow: 'column',
    position: 'absolute',
    left: '0',
    right: '0'
  };

  styleHeadline = {
    textAlign: 'center',
    verticalAlign: 'center'
  };
  getTimeFormat(seconds) {
    return GLOBALCONST.getTimeFormatFromSeconds(seconds);
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.state.delay !== 0) {
        //if counter is 10 or five play sound (one more because of delay)
        if (this.state.delay === 11) {
          let audio = new Audio(Ten);
          audio.play();
        }
        if (this.state.delay === 6) {
          let audio = new Audio(Five);
          audio.play();
        }

        this.setState({ delay: this.state.delay - 1 });
      } else {
        let audio = new Audio(Beep);
        audio.play();
        clearInterval(this.interval);
        this.setState({ redirect: true });
        return;
      }
    }, 1000);
  }

  componentDidMount() {
    this.startTimer();
  }
  render() {
    return (
      <div style={this.style} className={'fadein'}>
        <h1 style={this.styleHeadline} className="w-100 text-center">
          Set:
          {this.getTimeFormat(this.state.delay)}
        </h1>
        {this.state.redirect ? <Redirect push to="/output" /> : null}
      </div>
    );
  }
}
