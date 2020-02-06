import * as ACTION_TYPES from '../actions/action_type';

const initialState = {
  input: 'no input'
};

const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INPUT:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default InputReducer;
