import * as ACTION_TYPES from '../actions/action_type';

const initialState = {
  input: 0
};

const CurrentSetPushupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CURRENTSET_PUSHUPS:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default CurrentSetPushupsReducer;
