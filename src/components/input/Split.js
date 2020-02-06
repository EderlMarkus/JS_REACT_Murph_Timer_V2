import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import * as CONST from './const';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';

class Split extends Component {
  createOptions = () => {
    let retArray = [];
    for (let index = 0; index < CONST.splits.length; index++) {
      const element = CONST.splits[index];
      retArray.push(
        <option key={element} value={element}>
          {element}
        </option>
      );
    }
    return retArray;
  };

  componentDidMount() {
    this.props.action(CONST.initialSplit);
  }

  handleChange(event) {
    let fleldVal = event.target.value;
    this.props.action(fleldVal);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Split</Form.Label>
          <Form.Control
            defaultValue={CONST.initialSplit}
            onChange={this.handleChange.bind(this)}
            as="select"
          >
            {this.createOptions()}
          </Form.Control>
          <Form.Text className="text-muted">
            Enter how you want to Split the Murph
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
    action: text => dispatch(ACTIONS.split(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Split);
