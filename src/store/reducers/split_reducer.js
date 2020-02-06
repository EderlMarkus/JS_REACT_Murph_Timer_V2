import * as ACTION_TYPES from '../actions/action_type';

const initialState = {
  input: ['5', '10', '15']
};

const SplitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SPLIT:
      const array = action.payload.split('/');
      return {
        ...state,
        input: array
      };
    default:
      return state;
  }
};

export default SplitReducer;
