import React, { Component } from 'react';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import getSetTime from '../global_functions/getSetTime';
import Timer from './timer';
import getTotalRounds from '../global_functions/getTotalRounds';
class SetInfo extends Component {
  setSetTime(exercise, secondsToFinish, reps) {
    this.props.setCurrentSetTime(getSetTime(exercise, secondsToFinish, reps));
  }

  getTotalSets(exercise) {
    switch (exercise) {
      case 'pullups':
        return Math.ceil(this.props.split[0] / this.props.pullups);
      case 'pushups':
        return Math.ceil(this.props.split[1] / this.props.pushups);
      case 'squats':
        return Math.ceil(this.props.split[2] / this.props.squats);
      default:
        break;
    }
  }

  getRepsOfCurrentExercise(exercise) {
    switch (exercise) {
      case 'pullups':
        return this.props.pullups;
      case 'pushups':
        return this.props.pushups;
      case 'squats':
        return this.props.squats;
      default:
        break;
    }
  }

  componentDidMount() {
    //set current Exercise to pullups

    this.props.setCurrentExercise('pullups');
    setTimeout(() => {
      this.props.setCurrentSetPullups(1);
      this.setSetTime(
        'pullups',
        this.props.secondsToFinish,
        this.props.pullups
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <h2 className="w-100 text-center">
              Do {this.getRepsOfCurrentExercise(this.props.currentExercise)}{' '}
              {this.props.currentExercise}!
            </h2>
          </Row>
          <Row className="justify-content-md-center">
            <h5 className="w-100 text-center">
              Round {this.props.currentRound} of{' '}
              {getTotalRounds(this.props.split)}
            </h5>
          </Row>
          <Row>
            <p className="w-100 text-center">
              Pullups: {this.props.currentSetPullups} /{' '}
              {this.getTotalSets('pullups')}
            </p>
          </Row>
          <Row>
            <p className="w-100 text-center">
              Pushups: {this.props.currentSetPushups} /{' '}
              {this.getTotalSets('pushups')}
            </p>
          </Row>
          <Row>
            <p className="w-100 text-center">
              Squats: {this.props.currentSetSquats} /{' '}
              {this.getTotalSets('squats')}
            </p>
          </Row>
          <Row>
            <Timer></Timer>
          </Row>
        </Container>
      </React.Fragment>
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
    setCurrentSetPullups: text => dispatch(ACTIONS.currentSetPullups(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetInfo);
