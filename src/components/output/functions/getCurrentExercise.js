import getTotalSets from '../../global_functions/getTotalSets';
import capitalize from '../../global_functions/capitalize';
import getSetTime from '../../global_functions/getSetTime';

export default function getCurrentExercise(parentElement) {
  const props = parentElement.props;
  const exercise = props.currentExercise;
  let nextExercise;

  switch (exercise) {
    case 'pullups':
      nextExercise = 'pushups';
      break;
    case 'pushups':
      nextExercise = 'squats';
      break;
    case 'squats':
      nextExercise = 'pullups';
      break;
    default:
      return null;
  }

  return {
    name: exercise,
    currentSet: props['currentSet' + capitalize(exercise)],
    reps: props[exercise],
    setCurrentSet: props['setCurrentSet' + capitalize(exercise)],
    isComplete: checkIfSetComplete(
      props['currentSet' + capitalize(exercise)],
      exercise,
      props[exercise],
      props.split
    ),
    isLastSet: checkIfLastSet(
      props['currentSet' + capitalize(exercise)],
      'exercise',
      props[exercise],
      props.split
    ),
    countSetUp: () => {
      setCurrentSet(exercise, props);
    },
    countRepsUp: () => {
      setFinished(
        parentElement,
        exercise,
        props['finished' + capitalize(exercise)],
        props[exercise]
      );
    },
    setSetTime: () => {
      parentElement.setSetTime(
        exercise,
        props.secondsToFinish,
        props[exercise]
      );
    },
    getSetTime: () => {
      return getSetTime(exercise, props.secondsToFinish, props[exercise]);
    },
    setNextExercise: () => {
      props.setCurrentExercise(nextExercise);
    },
    getNextExercise: () => {
      return nextExercise;
    }
  };
}

function checkIfSetComplete(currentSet, name, reps, split) {
  return currentSet === getTotalSets(name, split, reps);
}

function checkIfLastSet(currentSet, name, reps, split) {
  return currentSet + 1 >= getTotalSets(name, split, reps);
}

function setFinished(parentElement, exercise, finishedReps, setReps) {
  parentElement.props['setFinished' + capitalize(exercise)](
    finishedReps + setReps
  );
}

function setCurrentSet(exercise, props) {
  let setSet;
  switch (exercise) {
    case 'pullups':
      setSet = props.setCurrentSetPullups;
      break;
    case 'pushups':
      setSet = props.setCurrentSetPushups;
      break;
    case 'squats':
      setSet = props.setCurrentSetSquats;
      break;
    default:
      break;
  }
  return setSet(props['currentSet' + capitalize(exercise)] + 1);
}
