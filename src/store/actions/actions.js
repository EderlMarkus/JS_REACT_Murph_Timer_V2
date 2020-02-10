import * as ACTION_TYPES from './action_type';

export const input = text => {
  return {
    type: ACTION_TYPES.INPUT,
    payload: text
  };
};

export const secondsToFinish = text => {
  return {
    type: ACTION_TYPES.SECONDSTOFINISH,
    payload: text
  };
};

export const adjustedTimeToFinish = text => {
  return {
    type: ACTION_TYPES.ADJUSTEDTIMETOFINISH,
    payload: text
  };
};

export const split = text => {
  return {
    type: ACTION_TYPES.SPLIT,
    payload: text
  };
};

export const pullups = text => {
  return {
    type: ACTION_TYPES.PULLUPS,
    payload: text
  };
};

export const pushups = text => {
  return {
    type: ACTION_TYPES.PUSHUPS,
    payload: text
  };
};

export const squats = text => {
  return {
    type: ACTION_TYPES.SQUATS,
    payload: text
  };
};

export const currentSetTime = text => {
  return {
    type: ACTION_TYPES.CURRENTSETTIME,
    payload: text
  };
};

export const elapsedTime = text => {
  return {
    type: ACTION_TYPES.ELAPSEDTIME,
    payload: text
  };
};

export const finishTime = text => {
  return {
    type: ACTION_TYPES.FINISHTIME,
    payload: text
  };
};

export const currentSetPullups = text => {
  return {
    type: ACTION_TYPES.CURRENTSET_PULLUPS,
    payload: text
  };
};

export const currentSetPushups = text => {
  return {
    type: ACTION_TYPES.CURRENTSET_PUSHUPS,
    payload: text
  };
};

export const currentSetSquats = text => {
  return {
    type: ACTION_TYPES.CURRENTSET_SQUATS,
    payload: text
  };
};

export const currentExercise = text => {
  return {
    type: ACTION_TYPES.CURRENT_EXERCISE,
    payload: text
  };
};

export const currentRound = text => {
  return {
    type: ACTION_TYPES.CURRENT_ROUND,
    payload: text
  };
};

export const fadeInInput = text => {
  return {
    type: ACTION_TYPES.FADEIN_INPUT,
    payload: text
  };
};

export const finsihedPullups = text => {
  return {
    type: ACTION_TYPES.FINISHED_PULLUPS,
    payload: text
  };
};

export const finsihedPushups = text => {
  return {
    type: ACTION_TYPES.FINISHED_PUSHUPS,
    payload: text
  };
};

export const finsihedSquats = text => {
  return {
    type: ACTION_TYPES.FINISHED_SQUATS,
    payload: text
  };
};
