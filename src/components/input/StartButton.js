import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import * as GLOBALCONST from '../const';
import getSetTime from '../global_functions/getSetTime';

class StartButton extends Component {
  setSetTime(exercise, secondsToFinish, reps) {
    const setTime = getSetTime(exercise, secondsToFinish, reps);
    this.props.setCurrentSetTime(setTime);
    this.props.setAdjustedTimeToFinish(this.props.secondsToFinish);
  }

  render() {
    return (
      <div>
        <Button
          onClick={() =>
            this.setSetTime(
              'pullups',
              this.props.secondsToFinish,
              this.props.pullups
            )
          }
          variant="dark"
          size="lg"
          block
        >
          Start
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state1: state.pushups_reducer.input,
    secondsToFinish: state.seconds_to_finish_reducer.input,
    pullups: state.pullups_reducer.input,
    pushups: state.pushups_reducer.input,
    squats: state.squats_reducer.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentSetTime: text => dispatch(ACTIONS.currentSetTime(text)),
    setAdjustedTimeToFinish: text =>
      dispatch(ACTIONS.adjustedTimeToFinish(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
