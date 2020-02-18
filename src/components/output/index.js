import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SetInfo from './setInfo';
import WorkoutInfo from './workoutInfo';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';

class Index extends Component {
  green = {
    background: 'green'
  };

  blue = {
    background: 'blue'
  };

  red = {
    background: 'red'
  };

  componentDidMount() {
    this.props.setFadeIn('fadein');
  }

  render() {
    return (
      <React.Fragment>
        <Container className={'wrapper ' + this.props.fadeIn}>
          <Row>
            <Col md="12">
              <SetInfo></SetInfo>
            </Col>
            <hr></hr>
            <Col md="12">
              <WorkoutInfo></WorkoutInfo>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    fadeIn: state.fade_in_input_reducer.input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFadeIn: text => dispatch(ACTIONS.fadeInInput(text))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
