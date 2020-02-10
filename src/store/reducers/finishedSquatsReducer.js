import * as ACTION_TYPES from '../actions/action_type';

const initialState = {
  input: 0
};

const FinishedSquatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FINISHED_SQUATS:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default FinishedSquatsReducer;
