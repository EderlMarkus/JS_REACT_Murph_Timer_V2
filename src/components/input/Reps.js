import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import * as ACTIONS from '../../store/actions/actions';
import * as CONST from './const';

import { connect } from 'react-redux';

class Split extends Component {
  getMinMax(exercise) {
    let retObj = { min: 1, max: 0 };
    switch (exercise) {
      case 'pullups':
        retObj.max = this.props.split[0];
        return retObj;
      case 'pushups':
        retObj.max = this.props.split[1];
        return retObj;
      case 'squats':
        retObj.max = this.props.split[2];
        return retObj;
      default:
        break;
    }
  }
  createOptions = (exercise, split) => {
    const options = [];
    let min;
    let max;
    switch (exercise) {
      case 'pullups':
        min = 1;
        max = split[0];
        break;
      case 'pushups':
        min = 1;
        max = split[1];
        break;
      case 'squats':
        min = 1;
        max = split[2];
        break;
      default:
        break;
    }
    for (let index = min; index < parseInt(max) + 1; index++) {
      options.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }
    return options;
  };

  handlePullups(event) {
    let fleldVal = event.target.value;
    this.props.action_pullups(fleldVal);
  }

  handlePushups(event) {
    let fleldVal = event.target.value;
    this.props.action_pushups(fleldVal);
  }

  handleSquats(event) {
    let fleldVal = event.target.value;
    this.props.action_squats(fleldVal);
  }

  componentDidMount() {
    this.props.action_pullups(CONST.initialReps.pullups);
    this.props.action_pushups(CONST.initialReps.pushups);
    this.props.action_squats(CONST.initialReps.squats);
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Pullups: {this.props.pullups}</Form.Label>
            <Form.Control
              onChange={this.handlePullups.bind(this)}
              defaultValue={CONST.initialReps.pullups}
              as="select"
            >
              {this.createOptions('pullups', this.props.split)}
            </Form.Control>

            {/* <input
              className="range"
              type="range"
              min={this.getMinMax('pullups').min}
              max={this.getMinMax('pullups').max}
              onChange={this.handlePullups.bind(this)}
              defaultValue={CONST.initialReps.pullups}
            ></input> */}

            <Form.Text className="text-muted">
              Enter how many Pullups you can do at once
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Pushups: {this.props.pushups}</Form.Label>
            <Form.Control
              defaultValue={CONST.initialReps.pushups}
              onChange={this.handlePushups.bind(this)}
              as="select"
            >
              {this.createOptions('pushups', this.props.split)}
            </Form.Control>

            {/* <input
              className="range"
              type="range"
              min={this.getMinMax('pushups').min}
              max={this.getMinMax('pushups').max}
              onChange={this.handlePushups.bind(this)}
              defaultValue={CONST.initialReps.pushups}
            ></input> */}

            <Form.Text className="text-muted">
              Enter how many Pushups you can do at once
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Squats: {this.props.squats}</Form.Label>
            <Form.Control
              defaultValue={CONST.initialReps.squats}
              onChange={this.handleSquats.bind(this)}
              as="select"
            >
              {this.createOptions('squats', this.props.split)}
            </Form.Control>

            {/* <input
              className="range"
              type="range"
              min={this.getMinMax('squats').min}
              max={this.getMinMax('squats').max}
              onChange={this.handleSquats.bind(this)}
              defaultValue={CONST.initialReps.squats}
            ></input> */}

            <Form.Text className="text-muted">
              Enter how many Squats you can do at once
            </Form.Text>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    split: state.split_reducer.input,
    pullups: state.pullups_reducer.input,
    pushups: state.pushups_reducer.input,
    squats: state.squats_reducer.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action_pullups: text => dispatch(ACTIONS.pullups(text)),
    action_pushups: text => dispatch(ACTIONS.pushups(text)),
    action_squats: text => dispatch(ACTIONS.squats(text)),
    setCurrentSetTime: text => dispatch(ACTIONS.currentSetTime(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Split);
