import * as ACTION_TYPES from '../actions/action_type';

const initialState = {
  input: 0
};

const CurrentRoundReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CURRENT_ROUND:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default CurrentRoundReducer;
