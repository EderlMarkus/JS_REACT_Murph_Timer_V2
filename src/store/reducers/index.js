import InputReducer from './input_reducer';
import SecondsToFinishReducer from './secondsToFinish_reducer';
import SplitReducer from './split_reducer';
import PullupsReducer from './pullups_reducer';
import PushupsReducer from './pushups_reducer';
import SquatsReducer from './squats_reducer';
import CurrentSetTimeReducer from './currentSetTime_reducer';
import ElapsedTimeReducer from './elapsedTime_reducer';
import FinishTimeReducer from './finishTime_reducer';
import CurrentSetSquatsReducer from './currentSetSquats_reducer';
import CurrentSetPushupsReducer from './currentSetPushups_reducer';
import CurrentSetPullupsReducer from './currentSetPullups_reducer';
import CurrentRoundReducer from './currentRound_reducer';
import CurrentExerciseReducer from './currentExercise_reducer';
import AdjustedTimeToFinish from './adjustedTimeToFinish_reducer';
import FadeInInputReducer from './fadeInInput_reducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  input_reducer: InputReducer,
  seconds_to_finish_reducer: SecondsToFinishReducer,
  split_reducer: SplitReducer,
  pullups_reducer: PullupsReducer,
  pushups_reducer: PushupsReducer,
  squats_reducer: SquatsReducer,
  current_set_time_reducer: CurrentSetTimeReducer,
  elapsed_time_reducer: ElapsedTimeReducer,
  finish_time_reducer: FinishTimeReducer,
  current_set_squats_reducer: CurrentSetSquatsReducer,
  current_set_pullups_reducer: CurrentSetPullupsReducer,
  current_set_pushups_reducer: CurrentSetPushupsReducer,
  current_round_reducer: CurrentRoundReducer,
  current_exercise_reducer: CurrentExerciseReducer,
  adjusted_time_to_finish_reducer: AdjustedTimeToFinish,
  fade_in_input_reducer: FadeInInputReducer
});
