import React, { Component } from 'react';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import * as GLOBALCONST from '../const';
import getSetTime from '../global_functions/getSetTime';
import getTotalSets from '../global_functions/getTotalSets';
import getTotalRounds from '../global_functions/getTotalRounds';
import Ten from '../sound/ten.mp3';
import Five from '../sound/five.mp3';
import Beep from '../sound/beep.mp3';
import BeepNext from '../sound/beepNext.mp3';

class Timer extends Component {
  interval;

  getTimeFormat(seconds) {
    return GLOBALCONST.getTimeFormatFromSeconds(seconds);
  }

  setSetTime(exercise, secondsToFinish, reps) {
    this.props.setCurrentSetTime(getSetTime(exercise, secondsToFinish, reps));
  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.props.currentSetTime !== 0) {
        //if counter is 10 or five play sound (one more because of delay)
        if (this.props.currentSetTime === 11) {
          let audio = new Audio(Ten);
          audio.play();
        }
        if (this.props.currentSetTime === 6) {
          let audio = new Audio(Five);
          audio.play();
        }
        if (this.props.currentSetTime < 5 && this.props.currentSetTime > 1) {
          let audio = new Audio(Beep);
          audio.play();
        }
        if (this.props.currentSetTime === 1) {
          let audio = new Audio(BeepNext);
          audio.play();
        }

        this.props.setCurrentSetTime(this.props.currentSetTime - 1);
      } else {
        this.handleNextSet();
      }
    }, 1000);
  }

  checkIfSetComplete(currentSet, name, reps) {
    return currentSet === getTotalSets(name, this.props.split, reps);
  }

  getCurrentExercise() {
    const exercise = this.props.currentExercise;
    switch (exercise) {
      case 'pullups':
        return {
          name: 'pullups',
          currentSet: this.props.currentSetPullups,
          reps: this.props.pullups,
          setCurrentSet: this.props.setCurrentSetPullups,
          isComplete: this.checkIfSetComplete(
            this.props.currentSetPullups,
            'pullups',
            this.props.pullups
          ),
          countSetUp: () => {
            this.props.setCurrentSetPullups(this.props.currentSetPullups + 1);
          },
          setSetTime: () => {
            this.setSetTime(
              'pullups',
              this.props.secondsToFinish,
              this.props.pullups
            );
          },
          getNextExercise: () => {
            this.props.setCurrentExercise('pushups');
          }
        };
      case 'pushups':
        return {
          name: 'pushups',
          currentSet: this.props.currentSetPushups,
          reps: this.props.pushups,
          setCurrentSet: this.props.setCurrentSetPushups,
          isComplete: this.checkIfSetComplete(
            this.props.currentSetPushups,
            'pushups',
            this.props.pushups
          ),
          countSetUp: () => {
            this.props.setCurrentSetPushups(this.props.currentSetPushups + 1);
          },
          setSetTime: () => {
            this.setSetTime(
              'pushups',
              this.props.secondsToFinish,
              this.props.pushups
            );
          },
          getNextExercise: () => {
            this.props.setCurrentExercise('squats');
          }
        };
      case 'squats':
        return {
          name: 'squats',
          currentSet: this.props.currentSetSquats,
          reps: this.props.squats,
          setCurrentSet: this.props.setCurrentSetSquats,
          isComplete: this.checkIfSetComplete(
            this.props.currentSetSquats,
            'squats',
            this.props.squats
          ),
          countSetUp: () => {
            this.props.setCurrentSetSquats(this.props.currentSetSquats + 1);
          },
          setSetTime: () => {
            this.setSetTime(
              'squats',
              this.props.secondsToFinish,
              this.props.squats
            );
          },
          getNextExercise: () => {
            //last exercise handles round change
            this.handleNextRound();
          }
        };
      default:
        return null;
    }
  }

  handleNextRound() {
    if (this.props.currentRound !== getTotalRounds(this.props.split)) {
      this.props.setCurrentSetPullups(0);
      this.props.setCurrentSetPushups(0);
      this.props.setCurrentSetSquats(0);
      this.props.setCurrentExercise('pullups');
      this.props.setCurrentRound(this.props.currentRound + 1);
    }
  }
  handleNextSet() {
    let exercise = this.getCurrentExercise();
    if (!exercise.isComplete) {
      exercise.countSetUp();
      exercise.setSetTime();
    } else {
      exercise.getNextExercise();
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2 className="w-100 text-center">
        Set:
        {this.getTimeFormat(this.props.currentSetTime)}
      </h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    split: state.split_reducer.input,
    pullups: state.pullups_reducer.input,
    pushups: state.pushups_reducer.input,
    squats: state.squats_reducer.input,
    secondsToFinish: state.seconds_to_finish_reducer.input,
    currentSetTime: state.current_set_time_reducer.input,
    currentSetPullups: state.current_set_pullups_reducer.input,
    currentSetPushups: state.current_set_pushups_reducer.input,
    currentSetSquats: state.current_set_squats_reducer.input,
    currentExercise: state.current_exercise_reducer.input,
    currentRound: state.current_round_reducer.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentSetTime: text => dispatch(ACTIONS.currentSetTime(text)),
    setCurrentExercise: text => dispatch(ACTIONS.currentExercise(text)),
    setCurrentSetPullups: text => dispatch(ACTIONS.currentSetPullups(text)),
    setCurrentSetPushups: text => dispatch(ACTIONS.currentSetPushups(text)),
    setCurrentSetSquats: text => dispatch(ACTIONS.currentSetSquats(text)),
    setCurrentRound: text => dispatch(ACTIONS.currentRound(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
