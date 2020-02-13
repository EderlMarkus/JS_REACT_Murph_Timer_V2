import React, { Component } from 'react';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import getSetTime from '../global_functions/getSetTime';
import Timer from './timer';
import getTotalRounds from '../global_functions/getTotalRounds';
import getTotalSets from '../global_functions/getTotalSets';
import * as PROPSCONST from '../../store/const';

class SetInfo extends Component {
  setSetTime(exercise, secondsToFinish, reps) {
    this.props.setCurrentSetTime(getSetTime(exercise, secondsToFinish, reps));
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
              {getTotalSets('pullups', this.props.split, this.props.pullups)}
            </p>
          </Row>
          <Row>
            <p className="w-100 text-center">
              Pushups: {this.props.currentSetPushups} /{' '}
              {getTotalSets('pushups', this.props.split, this.props.pushups)}
            </p>
          </Row>
          <Row>
            <p className="w-100 text-center">
              Squats: {this.props.currentSetSquats} /{' '}
              {getTotalSets('squats', this.props.split, this.props.squats)}
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
  return PROPSCONST.mapStateToProps(state);
}

function mapDispatchToProps(dispatch) {
  return PROPSCONST.mapDispatchToProps(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SetInfo);
