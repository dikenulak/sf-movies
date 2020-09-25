import { GET_LOCATION_DATA, FILTER_BY_TITLE, RESET_DATA } from '../actions/actionTypes';

const defaultState = {
  fetched: false,
  data: [],
  actualData: [],
};

const movieLocationData = (state = defaultState, action) => {
  const actualData = action.data ? action.data : [];
  switch (action.type) {
    case GET_LOCATION_DATA:
      return {
        ...state,
        actualData,
        data: actualData,
        fetched: !!action.data,
      };
    case FILTER_BY_TITLE:
      return {
        ...state,
        actualData,
        data: action.data.filter(movieData => movieData.title === action.value),
        fetched: true,
      };
    case RESET_DATA:
      return {
        ...state,
        actualData,
        data: actualData,
        fetched: true,
      };
    default:
      return {
        ...state,
        ...action.data,
      };
  }
};
export default movieLocationData;
