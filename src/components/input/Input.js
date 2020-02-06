import React, { Component } from 'react';
import MinutesToFinish from './MinutesToFinish';
import Split from './Split';
import Reps from './Reps';
import StartButton from './StartButton';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Input extends Component {
  style = {
    marginTop: '10vh'
  };

  componentWillMount() {
    this.setState({ fadeIn: 'fadein' });
  }
  render() {
    return (
      <div className={'wrapper input ' + this.props.fadeIn} style={this.style}>
        <MinutesToFinish></MinutesToFinish>
        <Split></Split>
        <Reps></Reps>
        <Link to="/delay">
          <StartButton></StartButton>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fadeIn: state.fade_in_input_reducer.input
  };
}

export default connect(mapStateToProps)(Input);
