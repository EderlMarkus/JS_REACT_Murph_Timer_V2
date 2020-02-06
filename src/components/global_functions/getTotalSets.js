export default function getTotalSets(exercise, split, reps) {
  switch (exercise) {
    case 'pullups':
      return Math.ceil(split[0] / reps);
    case 'pushups':
      return Math.ceil(split[1] / reps);
    case 'squats':
      return Math.ceil(split[2] / reps);
    default:
      break;
  }
}
