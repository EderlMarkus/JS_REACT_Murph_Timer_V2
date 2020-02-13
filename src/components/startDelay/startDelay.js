import React, { Component } from 'react';
import * as GLOBALCONST from '../const';
import * as CONST from './const';
import { Redirect } from 'react-router';
import * as SOUNDS from '../sound/playSound';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';

class StartDelay extends Component {
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
        SOUNDS.saySeconds(this.state.delay - 1);
        this.setState({ delay: this.state.delay - 1 });
      } else {
        clearInterval(this.interval);
        this.setState({ redirect: true });
        return;
      }
    }, 1000);
  }

  componentDidMount() {
    if (this.props.currentSetTime === 0) {
      clearInterval(this.interval);
      this.setState({ redirect: true });
    }

    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={this.style} className={'fadein'}>
        <h1 style={this.styleHeadline} className="w-100 text-center">
          Workout starts in:
        </h1>
        <h1 style={this.styleHeadline} className="w-100 text-center">
          {this.getTimeFormat(this.state.delay)}
        </h1>
        {this.state.redirect ? <Redirect push to="/output" /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    secondsToFinish: state.seconds_to_finish_reducer.input,
    currentSetTime: state.current_set_time_reducer.input,
    adjustedTimeToFinish: state.adjusted_time_to_finish_reducer.input,
    finishedPullups: state.finished_pullups_reducer.input,
    finishedPushups: state.finished_pushups_reducer.input,
    finishedSquats: state.finished_squats_reducer.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSecondsToFinish: text => dispatch(ACTIONS.secondsToFinish(text)),
    setCurrentSetTime: text => dispatch(ACTIONS.currentSetTime(text)),
    setCurrentRound: text => dispatch(ACTIONS.currentRound(text)),
    setAdjustedTimeToFinish: text =>
      dispatch(ACTIONS.adjustedTimeToFinish(text)),
    setFinishedPullups: text => dispatch(ACTIONS.finsihedPullups(text)),
    setFinishedPushups: text => dispatch(ACTIONS.finsihedPushups(text)),
    setFinishedSquats: text => dispatch(ACTIONS.finsihedSquats(text)),
    setCurrentSetPullups: text => dispatch(ACTIONS.currentSetPullups(text)),
    setCurrentSetPushups: text => dispatch(ACTIONS.currentSetPushups(text)),
    setCurrentSetSquats: text => dispatch(ACTIONS.currentSetSquats(text))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StartDelay);
