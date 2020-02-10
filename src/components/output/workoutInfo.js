import React, { Component } from 'react';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as GLOBALCONST from '../const';
import { Redirect } from 'react-router';
import ReactNoSleep from 'react-no-sleep';

class WorkoutInfo extends Component {
  state = {
    elapsedSeconds: 0,
    redirect: false
  };

  //to save the interval, so we can clear it on componentdidunmount
  ellapsedTime;

  getTimeFormat(seconds) {
    return GLOBALCONST.getTimeFormatFromSeconds(seconds);
  }

  addSeconds(seconds) {
    this.props.setCurrentSetTime(this.props.currentSetTime + seconds);
    this.props.setAdjustedTimeToFinish(
      this.props.adjustedTimeToFinish + seconds
    );

    return;
  }

  removeSeconds(seconds) {
    if (this.props.currentSetTime > 5) {
      this.props.setCurrentSetTime(this.props.currentSetTime - seconds);
      this.props.setAdjustedTimeToFinish(
        this.props.adjustedTimeToFinish - seconds
      );
    }
    return;
  }

  getElapsedTime() {
    this.ellapsedTime = setInterval(() => {
      this.setState({ elapsedSeconds: this.state.elapsedSeconds + 1 });
    }, 1000);
  }

  componentDidMount() {
    this.getElapsedTime();
    //when starting CurrentRound is 1
    this.props.setCurrentRound(1);
    if (this.props.currentSetTime === 0) {
      this.stopWorkout(true);
    }
  }

  componentWillUnmount() {
    clearInterval(this.ellapsedTime);
  }

  stopWorkout(stopImmediatley) {
    if (stopImmediatley || window.confirm('Stop Workout?')) {
      //reset adjustements
      this.props.setCurrentRound(0);
      this.props.setFinishedPullups(0);
      this.props.setFinishedPushups(0);
      this.props.setFinishedSquats(0);
      this.props.setCurrentSetPullups(0);
      this.props.setCurrentSetPushups(0);
      this.props.setCurrentSetSquats(0);

      //redirect to homepage
      this.setState({ redirect: true });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="mb-2 justify-content-md-center">
            <Button onClick={() => this.addSeconds(5)} variant="dark" block>
              {' '}
              + 5 Seconds
            </Button>
          </Row>
          <Row className="mb-2 justify-content-md-center">
            <Button onClick={() => this.removeSeconds(5)} variant="dark" block>
              {' '}
              - 5 Seconds
            </Button>
          </Row>
          <Row className="mb-2 justify-content-md-center">
            <ReactNoSleep>
              {({ isOn, enable, disable }) => (
                <Button onClick={isOn ? disable : enable} block variant="dark">
                  {isOn ? 'Deactivate ' : 'Activate '}
                  NoSleep
                </Button>
              )}
            </ReactNoSleep>
          </Row>
          <Row className="mb-2 justify-content-md-center">
            <Button
              onClick={() => {
                this.stopWorkout();
              }}
              block
              variant="dark"
            >
              {' '}
              Stop
            </Button>{' '}
          </Row>
          <Row className="mb-2 justify-content-md-center">
            <h4 className="m-auto"> Total</h4>
          </Row>
          <Row>
            <Col>Pullups: {this.props.finishedPullups}</Col>
            <Col>Pushups: {this.props.finishedPushups}</Col>
            <Col>Squats: {this.props.finishedSquats}</Col>
          </Row>
          <hr></hr>
          <Row>
            <Col className="text-center">
              <h4>Elapsed: {this.getTimeFormat(this.state.elapsedSeconds)}</h4>
              <h4>
                Finish: {this.getTimeFormat(this.props.adjustedTimeToFinish)}
              </h4>
            </Col>
          </Row>
        </Container>
        {this.state.redirect ? <Redirect push to="/" /> : null}
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutInfo);
