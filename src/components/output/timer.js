import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as GLOBALCONST from '../const';
import getSetTime from '../global_functions/getSetTime';
import getTotalSets from '../global_functions/getTotalSets';
import getTotalRounds from '../global_functions/getTotalRounds';
import * as SOUNDS from '../sound/playSound';
import getCurrentExercise from './functions/getCurrentExercise';
import handleNextRound from './functions/handleNextRound';
import handleNextSet from './functions/handleNextSet';
import * as PROPSCONST from '../../store/const';
import capitalize from '../global_functions/capitalize';

class Timer extends Component {
  interval;

  getTimeFormat(seconds) {
    return GLOBALCONST.getTimeFormatFromSeconds(seconds);
  }

  setSetTime(exercise, secondsToFinish, reps) {
    this.props.setCurrentSetTime(getSetTime(exercise, secondsToFinish, reps));
  }

  checkIfSetComplete(currentSet, name, reps) {
    return currentSet === getTotalSets(name, this.props.split, reps);
  }

  checkIfLastRound() {
    return (
      this.props.currentRound ===
      getTotalRounds(this.props.versions, this.props.split)
    );
  }

  checkIfLastSet() {
    return (
      this.props.currentSetSquats ===
      getTotalSets('squats', this.props.split, this.props.squats)
    );
  }

  getCurrentExercise() {
    let exercise = getCurrentExercise(this);
    return exercise;
  }

  handleNextRound() {
    handleNextRound(this);
  }

  handleNextSet() {
    handleNextSet(this);
  }

  checkIfSecondsLeft() {
    return this.props.currentSetTime !== 0;
  }

  tick() {
    this.props.setCurrentSetTime(this.currentSecond() - 1);
  }

  tickElapsedTime() {
    this.props.setElapsedTime(this.props.elapsedTime + 1);
  }

  currentSecond() {
    return this.props.currentSetTime;
  }

  sayNextExercise() {
    let nextExercise;
    if (this.getCurrentExercise().isComplete) {
      nextExercise = this.getCurrentExercise().getNextExercise();
    } else {
      nextExercise = this.props.currentExercise;
    }
    SOUNDS.sayNextExercise(nextExercise);
  }

  checkIfLastExercise() {
    return this.checkIfLastRound() && this.checkIfLastSet();
  }

  checkIfFirstSecondOfSet() {
    return (
      this.getCurrentExercise().getSetTime() - 1 === this.props.currentSetTime
    );
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.tickElapsedTime();
      if (this.checkIfSecondsLeft()) {
        this.tick();
        //if this is the last set say it at the first seconds of set-time
        if (this.checkIfFirstSecondOfSet() && this.checkIfLastExercise()) {
          SOUNDS.saySetWillBeLast();
        }

        SOUNDS.saySeconds(this.props.currentSetTime);

        if (this.props.currentSetTime === 8 && !this.checkIfLastExercise()) {
          this.sayNextExercise();
        }
      } else {
        if (this.checkIfLastExercise()) {
          SOUNDS.sayWorkoutFinished();
          clearInterval(this.interval);
        } else {
          this.handleNextSet();
        }
      }
    }, 1000);
  }

  componentDidMount() {
    this.startTimer();
    SOUNDS.sayExercise('pullups');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.setElapsedTime(0);
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
  return PROPSCONST.mapStateToProps(state);
}

function mapDispatchToProps(dispatch) {
  return PROPSCONST.mapDispatchToProps(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
