/**
 *
 * @param {string} exercise = what exercise? (either 'pullups', 'pushups' or 'squats')
 * @param {int} secondsToFinish = how many seconds for total murph to finish?
 * @param {int} reps = how many reps per set?
 * @returns {int} how many seconds you can have for a set of an exercise
 */
export default function getSetTime(exercise, secondsToFinish, reps) {
  let seconds;
  switch (exercise) {
    case 'pullups':
      seconds = Math.floor(secondsToFinish / 3 / (100 / reps));
      break;
    case 'pushups':
      seconds = Math.floor(secondsToFinish / 3 / (200 / reps));
      break;
    case 'squats':
      seconds = Math.floor(secondsToFinish / 3 / (300 / reps));
      break;
    default:
      break;
  }
  return seconds;
}
