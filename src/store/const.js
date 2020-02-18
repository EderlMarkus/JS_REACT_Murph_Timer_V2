import * as ACTIONS from './actions/actions';

export function mapStateToProps(state) {
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
    currentRound: state.current_round_reducer.input,
    finishedPullups: state.finished_pullups_reducer.input,
    finishedPushups: state.finished_pushups_reducer.input,
    finishedSquats: state.finished_squats_reducer.input,
    adjustedTimeToFinish: state.adjusted_time_to_finish_reducer.input,
    elapsedTime: state.elapsed_time_reducer.input,
    versions: state.versions_reducer.input
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    setCurrentSetTime: text => dispatch(ACTIONS.currentSetTime(text)),
    setCurrentExercise: text => dispatch(ACTIONS.currentExercise(text)),
    setCurrentSetPullups: text => dispatch(ACTIONS.currentSetPullups(text)),
    setCurrentSetPushups: text => dispatch(ACTIONS.currentSetPushups(text)),
    setCurrentSetSquats: text => dispatch(ACTIONS.currentSetSquats(text)),
    setCurrentRound: text => dispatch(ACTIONS.currentRound(text)),
    setFinishedPullups: text => dispatch(ACTIONS.finsihedPullups(text)),
    setFinishedPushups: text => dispatch(ACTIONS.finsihedPushups(text)),
    setFinishedSquats: text => dispatch(ACTIONS.finsihedSquats(text)),
    setAdjustedTimeToFinish: text =>
      dispatch(ACTIONS.adjustedTimeToFinish(text)),
    setElapsedTime: text => dispatch(ACTIONS.elapsedTime(text)),
    setVersions: text => dispatch(ACTIONS.versions(text))
  };
}
