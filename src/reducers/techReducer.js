import {
  ADD_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  DELET_TECH,
} from '../actions/types.js';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default techReducer;
