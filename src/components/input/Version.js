import React, { Component } from 'react';
import * as ACTIONS from '../../store/actions/actions';
import * as CONST from './const';
import * as PROPSCONST from '../../store/const';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';

class Version extends Component {
  componentDidMount() {
    this.props.setVersions(10);
  }
  createOptions() {
    const options = [];
    CONST.versions.forEach(version => {
      options.push(
        <option key={version} value={version}>
          {version + '%-Murph'}
        </option>
      );
    });
    return options;
  }

  handleChange(e) {
    e.preventDefault();
    this.props.setVersions(e.target.value);
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="formVersion">
          <Form.Label>Version</Form.Label>
          <Form.Control
            defaultValue={CONST.initialVersion}
            onChange={this.handleChange.bind(this)}
            as="select"
          >
            {this.createOptions()}
          </Form.Control>
          <Form.Text className="text-muted">Enter Murph-Version</Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return PROPSCONST.mapStateToProps(state);
}

function mapDispatchToProps(dispatch) {
  return PROPSCONST.mapDispatchToProps(dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Version);
