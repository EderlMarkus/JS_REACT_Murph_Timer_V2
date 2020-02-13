import * as SOUNDS from '../../sound/playSound';
import getTotalRounds from '../../global_functions/getTotalRounds';

export default function handleNextRound(parentElement) {
  if (
    parentElement.props.currentRound !==
    getTotalRounds(parentElement.props.split)
  ) {
    parentElement.props.setCurrentSetPullups(0);
    parentElement.props.setCurrentSetPushups(0);
    parentElement.props.setCurrentSetSquats(0);
    parentElement.props.setCurrentExercise('pullups');

    parentElement.props.setCurrentRound(parentElement.props.currentRound + 1);

    if (
      parentElement.props.currentRound >
      getTotalRounds(parentElement.props.split)
    ) {
      SOUNDS.sayWorkoutFinished();
    }
  }
}
