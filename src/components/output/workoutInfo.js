import React, { Component } from 'react';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as GLOBALCONST from '../const';
import { Link } from 'react-router-dom';
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
  }

  componentWillUnmount() {
    clearInterval(this.ellapsedTime);
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="text-center"> Workout-Info</h3>
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
              onClick={() => this.setState({ redirect: true })}
              block
              variant="dark"
            >
              {' '}
              Stop
            </Button>{' '}
          </Row>

          <Row>
            <Col className="text-center">
              <h2>Elapsed: {this.getTimeFormat(this.state.elapsedSeconds)}</h2>
              <h2>
                Finish: {this.getTimeFormat(this.props.adjustedTimeToFinish)}
              </h2>
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
    adjustedTimeToFinish: state.adjusted_time_to_finish_reducer.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSecondsToFinish: text => dispatch(ACTIONS.secondsToFinish(text)),
    setCurrentSetTime: text => dispatch(ACTIONS.currentSetTime(text)),
    setAdjustedTimeToFinish: text =>
      dispatch(ACTIONS.adjustedTimeToFinish(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutInfo);
