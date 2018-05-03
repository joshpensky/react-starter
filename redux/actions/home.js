import { UPDATE_HOME_TITLE } from 'actions/types';

export const updateHomeTitle = valid => dispatch => {
  dispatch({
    type: UPDATE_HOME_TITLE,
    payload: valid,
  });
};
