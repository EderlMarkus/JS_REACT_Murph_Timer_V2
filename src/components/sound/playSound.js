import Ten from '../sound/ten.mp3';
import Five from '../sound/five.mp3';
import Four from '../sound/four.mp3';
import Three from '../sound/three.mp3';
import Two from '../sound/two.mp3';
import One from '../sound/one.mp3';
import Beep from '../sound/beepNext.mp3';
import do_pullups from '../sound/do_pullups.mp3';
import do_pushups from '../sound/do_pushups.mp3';
import do_squats from '../sound/do_squats.mp3';
import pullups_next from '../sound/pullups_next.mp3';
import pushups_next from '../sound/pushups_next.mp3';
import squats_next from '../sound/squats_next.mp3';
import workout_finished from '../sound/workout_finished.mp3';
import last_set from '../sound/last_set.mp3';

export function saySeconds(seconds) {
  //if counter is 10 or five play sound (one more because of delay)
  let audio;
  if (seconds === 10) {
    audio = Ten;
  }

  if (seconds === 5) {
    audio = Five;
  }
  if (seconds === 4) {
    audio = Four;
  }
  if (seconds === 3) {
    audio = Three;
  }
  if (seconds === 2) {
    audio = Two;
  }
  if (seconds === 1) {
    audio = One;
  }
  if (seconds === 0) {
    audio = Beep;
  }
  audio = new Audio(audio);
  audio.play();
}

export function sayExercise(exercise) {
  let audio;
  switch (exercise) {
    case 'pullups':
      audio = do_pullups;
      break;
    case 'pushups':
      audio = do_pushups;
      break;
    case 'squats':
      audio = do_squats;
      break;
    default:
      break;
  }
  audio = new Audio(audio);
  audio.play();
}

export function sayNextExercise(exercise) {
  let audio;
  switch (exercise) {
    case 'pullups':
      audio = pullups_next;
      break;
    case 'pushups':
      audio = pushups_next;
      break;
    case 'squats':
      audio = squats_next;
      break;
    default:
      break;
  }
  audio = new Audio(audio);
  audio.play();
}

export function sayWorkoutFinished() {
  let audio = new Audio(workout_finished);
  audio.play();
}

export function saySetWillBeLast() {
  let audio = new Audio(last_set);
  audio.play();
}
