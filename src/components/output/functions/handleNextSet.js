export default function handleNextSet(parentElement) {
  let exercise = parentElement.getCurrentExercise();
  if (!exercise.isComplete) {
    exercise.countSetUp();
    if (exercise.currentSet >= 1) {
      exercise.countRepsUp();
    }
    exercise.setSetTime();
  } else {
    exercise.countRepsUp();
    if (exercise.getNextExercise() === 'pullups') {
      parentElement.handleNextRound();
    }
    exercise.setNextExercise();
  }
}
