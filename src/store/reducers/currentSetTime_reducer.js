import * as ACTION_TYPES from '../actions/action_type';

const initialState = {
  input: 0
};

const CurrentSetTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CURRENTSETTIME:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default CurrentSetTimeReducer;
