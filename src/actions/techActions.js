import {
  ADD_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  DELET_TECH,
} from './types';

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('./techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
