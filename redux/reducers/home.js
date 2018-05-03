import { UPDATE_HOME_TITLE } from 'actions/types';

const initialState = {
  valid: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOME_TITLE:
      return {
        ...state,
        valid: action.payload,
      };
    default:
      return state;
  }
};
