import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import * as CONST from './const';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';

class MinutesToFinish extends Component {
  createOptions = () => {
    const options = [];
    const min = CONST.minutesMin;
    const max = CONST.minutesMax + 1;

    for (let index = min; index < max; index++) {
      options.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }
    return options;
  };

  componentDidMount() {
    this.props.action(CONST.initialMinutes * 60);
  }

  handleChange(event) {
    let fleldVal = event.target.value;
    this.props.action(fleldVal * 60);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Minutes to Finish</Form.Label>
          <Form.Control
            defaultValue={CONST.initialMinutes}
            onChange={this.handleChange.bind(this)}
            as="select"
          >
            {this.createOptions()}
          </Form.Control>
          <Form.Text className="text-muted">
            Enter in how many Minutes you want to finish the Murph
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    action: text => dispatch(ACTIONS.secondsToFinish(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MinutesToFinish);
